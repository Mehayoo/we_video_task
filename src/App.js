import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { HomePage } from "./components";
import "./App.scss";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

function App() {
  useEffect(() => {
    //Initialize materialize JS
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;
