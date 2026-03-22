import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

// Создаем корневой редюсер
export const rootReducer = combineReducers({
  users: userReducer,
});

