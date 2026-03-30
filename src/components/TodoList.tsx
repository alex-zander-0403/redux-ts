import React, { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

//
export const TodoList: React.FC = () => {
  const { todos, loading, error, page, limit } = useTypedSelector(
    (state) => state.todos,
  );
  const { fetchTodos, setTodoPage } = useActions();

  // статические страницы временно
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

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

      {pages.map((p) => {
        return (
          <div
            key={p}
            style={{
              border: p === page ? "2px solid green" : "1px solid grey",
              padding: 10,
            }}
            onClick={() => setTodoPage(p)}
          >
            {p}
          </div>
        );
      })}
    </div>
  );
};
