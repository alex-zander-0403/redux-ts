import { Dispatch } from "redux";
import { TodoAction, TodoActionTypes } from "../../types/todo";

// async action для получения данных с сервера
export const fetchTodos = (page = 1, limit = 5) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS });

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`,
      );
      const data = await response.json();

      dispatch({
        type: TodoActionTypes.FETCH_TODOS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: TodoActionTypes.FETCH_TODOS_ERROR,
        payload: "не удалось получить задачи",
      });
    }
  };
};

export const setTodoPage = (page: number): TodoAction => {
  return { type: TodoActionTypes.SET_TODO_PAGE, payload: page };
};
