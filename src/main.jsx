import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { createStore } from "redux";

let defaultState = {
  counter: 100,
};

let reducer = (state = defaultState, actions) => {
  switch (actions.type) {
    case "ADD":
      return { ...state, counter: state.counter + actions.payload };
    case "REMOVE":
      return { ...state, counter: state.counter - actions.payload };
    default:
      return state;
  }
};

let store = createStore(reducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
