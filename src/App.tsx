import { Provider } from "react-redux";
import { store } from "./store";
import UserList from "./components/UserList";

//
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux Store</h1>
        <UserList />
      </div>
    </Provider>
  );
}

export default App;
