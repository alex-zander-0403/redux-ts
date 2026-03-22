import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

//
const UserList: React.FC = () => {
  const users = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(users);

  return <div>123</div>;
};

export default UserList;
