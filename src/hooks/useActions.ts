import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import ActionCreators from "../store/action-creators/index";

//
export function useActions() {
  const dispatch = useDispatch();

  // bindActionCreators оборачивает каждый action creator в вызов dispatch
  return bindActionCreators(ActionCreators, dispatch);
}
