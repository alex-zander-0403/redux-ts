import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

// Создаем корневой редюсер
export const rootReducer = combineReducers({
  users: userReducer,
});

// выводим тип rootReducer и экспортируем для использования в типизации в компоненте
export type RootState = ReturnType<typeof rootReducer>;
