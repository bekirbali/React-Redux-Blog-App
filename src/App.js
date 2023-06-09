import { Provider } from "react-redux";
import "./App.scss";
import AppRouter from "./router/AppRouter";
import store, { persistor } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="h-[100vh] p-2">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRouter />
        </PersistGate>
      </Provider>
      <ToastContainer />
    </div>
  );
};

export default App;
