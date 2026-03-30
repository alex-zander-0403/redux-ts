import * as TodoActionCreators from "./todos";
import * as UserActionCreators from "./users";

export default {
  ...TodoActionCreators,
  ...UserActionCreators,
};
