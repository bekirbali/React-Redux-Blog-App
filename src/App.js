import { Provider } from "react-redux";
import "./App.scss";
import AppRouter from "./router/AppRouter";
import store from "./app/store";

const App = () => {
  return (
    <div className="h-[100vh] p-2">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
};

export default App;
