// интерфейс состояния user state
export interface UserState {
  users: any[]; // массив пользователей
  loading: boolean; // флаг загрузки
  error: null | string; // ошибка или null
}

// Enum для стандартизации названий action типов действий
export enum UserActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

// ----

// интерфейс для получения users
interface FetchUsersAction {
  type: UserActionTypes.FETCH_USERS; // конкретное значение из enum
}
// интерфейс для успешного получения users
interface FetchUsersSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS; // конкретное значение из enum
  payload: any[]; // массив пользователей
}
// интерфейс для ошибки получения users
interface FetchUsersErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR; // конкретное значение из enum
  payload: string; // текст ошибки
}

// union тип для action
export type UserAction =
  | FetchUsersAction
  | FetchUsersSuccessAction
  | FetchUsersErrorAction;
