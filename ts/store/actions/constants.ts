/**
 * All the actions related constants.
 */

// Navigation
export const NAVIGATION_RESTORE: "NAVIGATION_RESTORE" = "NAVIGATION_RESTORE";
export const NAVIGATION_HISTORY_PUSH: "NAVIGATION_HISTORY_PUSH" =
  "NAVIGATION_HISTORY_PUSH";
export const NAVIGATION_HISTORY_RESET: "NAVIGATION_HISTORY_RESET" =
  "NAVIGATION_HISTORY_RESET";
export const NAVIGATION_HISTORY_POP: "NAVIGATION_HISTORY_POP" =
  "NAVIGATION_HISTORY_POP";

// Onboarding
export const TOS_ACCEPT_REQUEST: "TOS_ACCEPT_REQUEST" = "TOS_ACCEPT_REQUEST";
export const TOS_ACCEPT_SUCCESS: "TOS_ACCEPT_SUCCESS" = "TOS_ACCEPT_SUCCESS";
export const START_PIN_RESET: "START_PIN_RESET" = "START_PIN_RESET";
export const PIN_CREATE_REQUEST: "PIN_CREATE_REQUEST" = "PIN_CREATE_REQUEST";
export const PIN_CREATE_SUCCESS: "PIN_CREATE_SUCCESS" = "PIN_CREATE_SUCCESS";
export const PIN_CREATE_FAILURE: "PIN_CREATE_FAILURE" = "PIN_CREATE_FAILURE";

// Notifications
export const NOTIFICATIONS_INSTALLATION_TOKEN_UPDATE: "NOTIFICATIONS_INSTALLATION_TOKEN_UPDATE" =
  "NOTIFICATIONS_INSTALLATION_TOKEN_UPDATE";
export const NOTIFICATIONS_INSTALLATION_UPDATE_FAILURE: "NOTIFICATIONS_INSTALLATION_UPDATE_FAILURE" =
  "NOTIFICATIONS_INSTALLATION_UPDATE_FAILURE";
export const NOTIFICATIONS_PENDING_MESSAGE_UPDATE: "NOTIFICATION_PENDING_MESSAGE_UPDATE" =
  "NOTIFICATION_PENDING_MESSAGE_UPDATE";
export const NOTIFICATIONS_PENDING_MESSAGE_CLEAR: "NOTIFICATION_PENDING_MESSAGE_CLEAR" =
  "NOTIFICATION_PENDING_MESSAGE_CLEAR";

// Pinlogin
export const PIN_LOGIN_VALIDATE_REQUEST: "PIN_LOGIN_VALIDATE_REQUEST" =
  "PIN_LOGIN_VALIDATE_REQUEST";
export const PIN_LOGIN_VALIDATE_SUCCESS: "PIN_LOGIN_VALIDATE_SUCCESS" =
  "PIN_LOGIN_VALIDATE_SUCCESS";
export const PIN_LOGIN_VALIDATE_FAILURE: "PIN_LOGIN_VALIDATE_FAILURE" =
  "PIN_LOGIN_VALIDATE_FAILURE";

// Profile
export const RESET_PROFILE_STATE: "RESET_PROFILE_STATE" = "RESET_PROFILE_STATE";
export const PROFILE_LOAD_SUCCESS: "PROFILE_LOAD_SUCCESS" =
  "PROFILE_LOAD_SUCCESS";
export const PROFILE_LOAD_FAILURE: "PROFILE_LOAD_FAILURE" =
  "PROFILE_LOAD_FAILURE";

export const PROFILE_UPSERT_REQUEST: "PROFILE_UPSERT_REQUEST" =
  "PROFILE_UPSERT_REQUEST";
export const PROFILE_UPSERT_SUCCESS: "PROFILE_UPSERT_SUCCESS" =
  "PROFILE_UPSERT_SUCCESS";
export const PROFILE_UPSERT_FAILURE: "PROFILE_UPSERT_FAILURE" =
  "PROFILE_UPSERT_FAILURE";

// Wallet
// (transactions)
export const FETCH_TRANSACTIONS_REQUEST: "FETCH_TRANSACTIONS_REQUEST" =
  "FETCH_TRANSACTIONS_REQUEST";
export const FETCH_TRANSACTIONS_SUCCESS: "FETCH_TRANSACTIONS_SUCCESS" =
  "FETCH_TRANSACTIONS_SUCCESS";
export const FETCH_TRANSACTIONS_FAILURE: "FETCH_TRANSACTIONS_FAILURE" =
  "FETCH_TRANSACTIONS_FAILURE";
export const SELECT_TRANSACTION_FOR_DETAILS: "SELECT_TRANSACTION_FOR_DETAILS" =
  "SELECT_TRANSACTION_FOR_DETAILS";
// (wallets)
export const FETCH_WALLETS_REQUEST: "FETCH_WALLETS_REQUEST" =
  "FETCH_WALLETS_REQUEST";
export const FETCH_WALLETS_SUCCESS: "FETCH_WALLETS_SUCCESS" =
  "FETCH_WALLETS_SUCCESS";
export const FETCH_WALLETS_FAILURE: "FETCH_WALLETS_FAILURE" =
  "FETCH_WALLETS_FAILURE";
export const SELECT_WALLET_FOR_DETAILS: "SELECT_WALLET_FOR_DETAILS" =
  "SELECT_WALLET_FOR_DETAILS";
export const SET_FAVORITE_WALLET: "SET_FAVORITE_WALLET" = "SET_FAVORITE_WALLET";
export const STORE_CREDIT_CARD_DATA: "STORE_CREDIT_CARD_DATA" =
  "STORE_CREDIT_CARD_DATA";
export const CREDIT_CARD_DATA_CLEANUP: "CREDIT_CARD_DATA_CLEANUP" =
  "CREDIT_CARD_DATA_CLEANUP";
export const ADD_CREDIT_CARD_REQUEST: "ADD_CREDIT_CARD_REQUEST" =
  "ADD_CREDIT_CARD_REQUEST";
export const ADD_CREDIT_CARD_COMPLETED: "ADD_CREDIT_CARD_COMPLETED" =
  "ADD_CREDIT_CARD_COMPLETED";
export const DELETE_WALLET_REQUEST: "DELETE_WALLET_REQUEST" =
  "DELETE_WALLET_REQUEST";
export const WALLET_MANAGEMENT_SET_LOADING_STATE: "WALLET_MANAGEMENT_SET_LOADING_STATE" =
  "WALLET_MANAGEMENT_SET_LOADING_STATE";
export const WALLET_MANAGEMENT_RESET_LOADING_STATE: "WALLET_MANAGEMENT_RESET_LOADING_STATE" =
  "WALLET_MANAGEMENT_RESET_LOADING_STATE";

// (payment)
export const PAYMENT_REQUEST_QR_CODE: "PAYMENT_REQUEST_QR_CODE" =
  "PAYMENT_REQUEST_QR_CODE";
export const PAYMENT_QR_CODE: "PAYMENT_QR_CODE" = "PAYMENT_QR_CODE";
export const PAYMENT_REQUEST_MANUAL_ENTRY: "PAYMENT_REQUEST_MANUAL_ENTRY" =
  "PAYMENT_REQUEST_MANUAL_ENTRY";
export const PAYMENT_MANUAL_ENTRY: "PAYMENT_MANUAL_ENTRY" =
  "PAYMENT_MANUAL_ENTRY";
export const PAYMENT_REQUEST_MESSAGE: "PAYMENT_REQUEST_MESSAGE" =
  "PAYMENT_REQUEST_MESSAGE";
export const PAYMENT_TRANSACTION_SUMMARY_FROM_RPT_ID: "PAYMENT_TRANSACTION_SUMMARY_FROM_RPT_ID" =
  "PAYMENT_TRANSACTION_SUMMARY_FROM_RPT_ID";
export const PAYMENT_TRANSACTION_SUMMARY_FROM_BANNER: "PAYMENT_TRANSACTION_SUMMARY_FROM_BANNER" =
  "PAYMENT_TRANSACTION_SUMMARY_FROM_BANNER";
export const PAYMENT_REQUEST_TRANSACTION_SUMMARY: "PAYMENT_REQUEST_TRANSACTION_SUMMARY" =
  "PAYMENT_REQUEST_TRANSACTION_SUMMARY";
export const PAYMENT_REQUEST_CONTINUE_WITH_PAYMENT_METHODS: "PAYMENT_REQUEST_CONTINUE_WITH_PAYMENT_METHODS" =
  "PAYMENT_REQUEST_CONTINUE_WITH_PAYMENT_METHODS";
export const PAYMENT_REQUEST_PICK_PAYMENT_METHOD: "PAYMENT_REQUEST_PICK_PAYMENT_METHOD" =
  "PAYMENT_REQUEST_PICK_PAYMENT_METHOD";
export const PAYMENT_PICK_PAYMENT_METHOD: "PAYMENT_PICK_PAYMENT_METHOD" =
  "PAYMENT_PICK_PAYMENT_METHOD";
export const PAYMENT_INITIAL_PICK_PAYMENT_METHOD: "PAYMENT_INITIAL_PICK_PAYMENT_METHOD" =
  "PAYMENT_INITIAL_PICK_PAYMENT_METHOD";
export const PAYMENT_REQUEST_CONFIRM_PAYMENT_METHOD: "PAYMENT_REQUEST_CONFIRM_PAYMENT_METHOD" =
  "PAYMENT_REQUEST_CONFIRM_PAYMENT_METHOD";
export const PAYMENT_CONFIRM_PAYMENT_METHOD: "PAYMENT_CONFIRM_PAYMENT_METHOD" =
  "PAYMENT_CONFIRM_PAYMENT_METHOD";
export const PAYMENT_INITIAL_CONFIRM_PAYMENT_METHOD: "PAYMENT_INITIAL_CONFIRM_PAYMENT_METHOD" =
  "PAYMENT_INITIAL_CONFIRM_PAYMENT_METHOD";
export const PAYMENT_REQUEST_PICK_PSP: "PAYMENT_REQUEST_PICK_PSP" =
  "PAYMENT_REQUEST_PICK_PSP";
export const PAYMENT_PICK_PSP: "PAYMENT_PICK_PSP" = "PAYMENT_PICK_PSP";
export const PAYMENT_INITIAL_PICK_PSP: "PAYMENT_INITIAL_PICK_PSP" =
  "PAYMENT_INITIAL_PICK_PSP";
export const PAYMENT_UPDATE_PSP: "PAYMENT_UPDATE_PSP" = "PAYMENT_UPDATE_PSP";
// TODO: temporary, until integration with pagoPA occurs @https://www.pivotaltracker.com/story/show/159494746
export const PAYMENT_UPDATE_PSP_IN_STATE: "PAYMENT_UPDATE_PSP_IN_STATE" =
  "PAYMENT_UPDATE_PSP_IN_STATE";
export const PAYMENT_REQUEST_COMPLETION: "PAYMENT_REQUEST_COMPLETION" =
  "PAYMENT_REQUEST_COMPLETION";
export const PAYMENT_COMPLETED: "PAYMENT_COMPLETED" = "PAYMENT_COMPLETED";
export const PAYMENT_STORE_NEW_TRANSACTION: "PAYMENT_STORE_NEW_TRANSACTION" =
  "PAYMENT_STORE_NEW_TRANSACTION";
export const PAYMENT_GO_BACK: "PAYMENT_GO_BACK" = "PAYMENT_GO_BACK";
export const PAYMENT_REQUEST_GO_BACK: "PAYMENT_REQUEST_GO_BACK" =
  "PAYMENT_REQUEST_GO_BACK";
export const PAYMENT_CANCEL: "PAYMENT_CANCEL" = "PAYMENT_CANCEL";
export const PAYMENT_REQUEST_CANCEL: "PAYMENT_REQUEST_CANCEL" =
  "PAYMENT_REQUEST_CANCEL";
export const PAYMENT_PIN_LOGIN: "PAYMENT_PIN_LOGIN" = "PAYMENT_PIN_LOGIN";
export const PAYMENT_REQUEST_PIN_LOGIN: "PAYMENT_REQUEST_PIN_LOGIN" =
  "PAYMENT_REQUEST_PIN_LOGIN";
export const PAYMENT_FAILURE: "PAYMENT_FAILURE" = "PAYMENT_FAILURE";

// payment loading actions
export const PAYMENT_SET_LOADING: "PAYMENT_SET_LOADING" = "PAYMENT_SET_LOADING";
export const PAYMENT_RESET_LOADING: "PAYMENT_RESET_LOADING" =
  "PAYMENT_RESET_LOADING";
// pagoPa actions
export const PAGOPA_STORE_TOKEN: "PAGOPA_STORE_TOKEN" = "PAGOPA_STORE_TOKEN";

// Messages
export const MESSAGE_LOAD_SUCCESS: "MESSAGE_LOAD_SUCCESS" =
  "MESSAGE_LOAD_SUCCESS";
export const MESSAGE_LOAD_FAILURE: "MESSAGE_LOAD_FAILURE" =
  "MESSAGE_LOAD_FAILURE";

export const MESSAGE_WITH_RELATIONS_LOAD_REQUEST: "MESSAGE_WITH_RELATIONS_LOAD_REQUEST" =
  "MESSAGE_WITH_RELATIONS_LOAD_REQUEST";
export const MESSAGE_WITH_RELATIONS_LOAD_SUCCESS: "MESSAGE_WITH_RELATIONS_LOAD_SUCCESS" =
  "MESSAGE_WITH_RELATIONS_LOAD_SUCCESS";
export const MESSAGE_WITH_RELATIONS_LOAD_FAILURE: "MESSAGE_WITH_RELATIONS_LOAD_FAILURE" =
  "MESSAGE_WITH_RELATIONS_LOAD_FAILURE";

export const MESSAGES_LOAD_REQUEST: "MESSAGES_LOAD_REQUEST" =
  "MESSAGES_LOAD_REQUEST";
export const MESSAGES_LOAD_CANCEL: "MESSAGES_LOAD_CANCEL" =
  "MESSAGES_LOAD_CANCEL";
export const MESSAGES_LOAD_SUCCESS: "MESSAGES_LOAD_SUCCESS" =
  "MESSAGES_LOAD_SUCCESS";
export const MESSAGES_LOAD_FAILURE: "MESSAGES_LOAD_FAILURE" =
  "MESSAGES_LOAD_FAILURE";

export const NAVIGATE_TO_MESSAGE_DETAILS: "NAVIGATE_TO_MESSAGE_DETAILS" =
  "NAVIGATE_TO_MESSAGE_DETAILS";

// Services
export const SERVICE_LOAD_SUCCESS: "SERVICE_LOAD_SUCCESS" =
  "SERVICE_LOAD_SUCCESS";
export const SERVICE_LOAD_FAILURE: "SERVICE_LOAD_FAILURE" =
  "SERVICE_LOAD_FAILURE";

// BackendInfo
export const BACKEND_INFO_LOAD_SUCCESS: "BACKEND_INFO_LOAD_SUCCESS" =
  "BACKEND_INFO_LOAD_SUCCESS";

export const BACKEND_INFO_LOAD_FAILURE: "BACKEND_INFO_LOAD_FAILURE" =
  "BACKEND_INFO_LOAD_FAILURE";

// Preferences

export const PREFERENCES_LANGUAGES_LOAD_SUCCESS: "PREFERENCES_LANGUAGES_LOAD_SUCCESS" =
  "PREFERENCES_LANGUAGES_LOAD_SUCCESS";

// Content

export const CONTENT_SERVICE_LOAD: "CONTENT_SERVICE_LOAD" =
  "CONTENT_SERVICE_LOAD";

export const CONTENT_SERVICE_LOAD_SUCCESS: "CONTENT_SERVICE_LOAD_SUCCESS" =
  "CONTENT_SERVICE_LOAD_SUCCESS";

export const CONTENT_SERVICE_LOAD_FAILURE: "CONTENT_SERVICE_LOAD_FAILURE" =
  "CONTENT_SERVICE_LOAD_FAILURE";

// Error
export const ERROR_CLEAR: "ERROR_CLEAR" = "ERROR_CLEAR";

// Enum for actions that need UI state reducers
export const enum FetchRequestActions {
  TOS_ACCEPT = "TOS_ACCEPT",
  PIN_CREATE = "PIN_CREATE",
  PROFILE_LOAD = "PROFILE_LOAD",
  PROFILE_UPSERT = "PROFILE_UPSERT",
  MESSAGES_LOAD = "MESSAGES_LOAD",
  MESSAGE_WITH_RELATIONS_LOAD = "MESSAGE_WITH_RELATIONS_LOAD",
  LOGOUT = "LOGOUT",
  PAYMENT = "PAYMENT",
  WALLET_MANAGEMENT_LOAD = "WALLET_MANAGEMENT_LOAD",
  FETCH_WALLETS = "FETCH_WALLET",
  FETCH_TRANSACTIONS = "FETCH_TRANSACTIONS"
}

// Extract keys from object and create a new union type
export type FetchRequestActionsType = keyof typeof FetchRequestActions;

export const SET_DEEPLINK: "SET_DEEPLINK" = "SET_DEEPLINK";
export const CLEAR_DEEPLINK: "CLEAR_DEEPLINK" = "CLEAR_DEEPLINK";
export const NAVIGATE_TO_DEEPLINK: "NAVIGATE_TO_DEEPLINK" =
  "NAVIGATE_TO_DEEPLINK";
