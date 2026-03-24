import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import { rootReducer } from "./reducers";

// Создаем store с главным Reducer
export const store = createStore(
  rootReducer as any, // временное
  applyMiddleware(thunk),
);
