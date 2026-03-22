// названия action типов для стандартизации
export enum UserActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

// интерфейс для users state
export interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
}

// ----

// интерфейс для получения users
interface FetchUsersAction {
  type: UserActionTypes.FETCH_USERS;
}
// интерфейс для успешного получения users
interface FetchUsersSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}
// интерфейс для ошибки получения users
interface FetchUsersErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

// union тип для action
export type UserAction =
  | FetchUsersAction
  | FetchUsersSuccessAction
  | FetchUsersErrorAction;
