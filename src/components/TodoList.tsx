import React, { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

//
export const TodoList: React.FC = () => {
  const { todos, loading, error, page, limit } = useTypedSelector(
    (state) => state.todos,
  );

  const { fetchTodos, setTodoPage } = useActions();

  useEffect(() => {
    fetchTodos(page, limit);
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
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <p>{todo.id}</p>
            <h3>{todo.title}</h3>
          </div>
        );
      })}
    </div>
  );
};
