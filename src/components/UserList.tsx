import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchUsers } from "../store/action-creators/users";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../store/reducers";
import { AnyAction } from "redux";

//
export const UserList: React.FC = () => {
  const { users, loading, error } = useTypedSelector((state) => state.users);

  // Правильная типизация dispatch для thunk
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  // =======================

  if (loading) {
    return <h1>загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        );
      })}
    </div>
  );
};
