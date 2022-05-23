import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";
import {createStore} from "redux";
import {rootReducer} from "./store/rootReducer";
import {Provider} from "react-redux";

const store = createStore(rootReducer)

// Init VK  Mini App
bridge.send("VKWebAppInit");

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
