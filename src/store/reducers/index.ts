import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { todoReducer } from "./todoReducer";

// Создаем корневой редюсер
export const rootReducer = combineReducers({
  users: userReducer,
  todos: todoReducer,
});

// выводим тип rootReducer и экспортируем для использования в типизации в компоненте
export type RootState = ReturnType<typeof rootReducer>;
