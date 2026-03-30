import { Provider } from "react-redux";
import { store } from "./store";
import { UserList } from "./components/UserList";
import { TodoList } from "./components/TodoList";

//
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux Store</h1>

        <UserList />
        <hr />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
