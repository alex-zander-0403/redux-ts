import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers";
import { useTypedSelector } from "../hooks/useTypedSelector";

//
const UserList: React.FC = () => {
  const users = useTypedSelector((state) => state.users);
  const dispatch = useDispatch();

  console.log(users);

  return <div>123</div>;
};

export default UserList;
