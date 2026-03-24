import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as UserActionCreators from "../store/action-creators/users";

//
export function useActions() {
  const dispatch = useDispatch();

  // bindActionCreators оборачивает каждый action creator в вызов dispatch
  return bindActionCreators(UserActionCreators, dispatch);
}
