import { TodoState } from "../../types/todo";

//
const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
  page: 1,
  limit: 5,
};

//
export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 123:
      return { qwe: 123 };

    default:
      state;
  }
}
