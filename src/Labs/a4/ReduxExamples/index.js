import React from "react";
import HelloRedux from "./HelloRedux/helloReducer";
import CounterRedux from "./CounterRedux/counterReducer";
import AddRedux from "./AddRedux/addReducer";
import TodoList from "./todos/TodoList";

const ReduxExamples = () => {
  return(
    <div>
      <h2>Redux Examples</h2>
      <TodoList/>
    </div>
  );
};

export default ReduxExamples; 