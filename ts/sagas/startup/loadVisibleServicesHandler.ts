import { readableReport } from "italia-ts-commons/lib/reporters";
import { call, Effect, put, select } from "redux-saga/effects";
import { BackendClient } from "../../api/backend";
import { sessionExpired } from "../../store/actions/authentication";
import { deleteUselessOrganizations } from "../../store/actions/organizations";
import { loadVisibleServices } from "../../store/actions/services";
import { servicesOrganizationsFiscalCode } from "../../store/reducers/entities/services/servicesByOrganizationFiscalCode";
import { SagaCallReturnType } from "../../types/utils";
import { refreshStoredServices } from "../services/refreshStoredServices";
import { removeUnusedStoredServices } from "../services/removeUnusedStoredServices";

/**
 * A generator to load the service details from the Backend
 *
 * @param {function} getService - The function that makes the Backend request
 * @param {string} id - The id of the service to load
 * @returns {IterableIterator<Effect | Either<Error, ServicePublic>>}
 */
export function* loadVisibleServicesRequestHandler(
  getVisibleServices: ReturnType<typeof BackendClient>["getVisibleServices"]
): IterableIterator<Effect> {
  try {
    const response: SagaCallReturnType<typeof getVisibleServices> = yield call(
      getVisibleServices,
      {}
    );
    if (response.isLeft()) {
      throw Error(readableReport(response.value));
    }
    if (response.value.status === 200) {
      const { items: visibleServices } = response.value.value;
      yield put(loadVisibleServices.success(visibleServices));

      // Check if old version of services are stored and load new available versions of services
      yield call(removeUnusedStoredServices, visibleServices);
      yield call(refreshStoredServices, visibleServices);
      yield call(removeOtherOrganizationServices);
    } else if (response.value.status === 401) {
      // on 401, expire the current session and restart the authentication flow
      yield put(sessionExpired());
      return;
    } else {
      throw Error("An error occurred loading visible services");
    }
  } catch (error) {
    yield put(loadVisibleServices.failure(error));
  }
}

// this function recovers all the organizations that have associated at least one service and sends an action
// to delete the data of the other organizations from the store, if it exists.
function* removeOtherOrganizationServices() {
  const organizationFiscalCodes: ReadonlyArray<string> = yield select(
    servicesOrganizationsFiscalCode
  );

  yield put(deleteUselessOrganizations(organizationFiscalCodes));
}
