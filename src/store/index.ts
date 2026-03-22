import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import { rootReducer } from "./reducers";

// Создаем store с явным указанием типа
export const store = createStore(rootReducer);
