import { Dispatch } from "redux";
import { UserAction, UserActionTypes } from "../../types/users";

// async action для получения данных с сервера
export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();

      dispatch({
        type: UserActionTypes.FETCH_USERS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: "не удалось получить пользователей",
      });
    }
  };
};
