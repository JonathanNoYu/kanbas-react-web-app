import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../a4/ReduxExamples/HelloRedux/helloReducer.js";

import store from "./store";
import { Provider } from "react-redux";
function Labs() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Labs</h1>
        ...
      </div>
    </Provider>
  );
}
export default Labs;
