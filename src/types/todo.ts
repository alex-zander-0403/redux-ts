// интерфейс состояния todo state
export interface TodoState {
  todos: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export enum TodoActionTypes {
  FETCH_TODOS = "FETCH_TODOS",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
  SET_TODO_PAGE = "SET_TODO_PAGE",
}

// ----

// интерфейс для получения todos
interface FetchTodosAction {
  type: TodoActionTypes.FETCH_TODOS; // значение из enum
}
// интерфейс для успешного получения todos
interface FetchUsersSuccessAction {
  type: TodoActionTypes.FETCH_TODOS_SUCCESS; // значение из enum
  payload: any[]; // массив todos при успехе
}
// интерфейс для ошибки получения todos
interface FetchUsersErrorAction {
  type: TodoActionTypes.FETCH_TODOS_ERROR; // значение из enum
  payload: string; // текст при ошибке
}

interface SetTodoPage {
  type: TodoActionTypes.SET_TODO_PAGE; // значение из enum
  payload: number; // номер страницы
}

export type TodoAction =
  | FetchTodosAction
  | FetchUsersSuccessAction
  | FetchUsersErrorAction
  | SetTodoPage;
