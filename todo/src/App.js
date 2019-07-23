import React, { useReducer } from "react";

import TodoList from "./components/TodoList";
import ListForm from "./components/ListForm";

import {
  reducer,
  initialState,
  ADD_ITEM,
  TOGGLE_ITEM,
  CLEAR_COMPLETED
} from "./reducers/reducers";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (e, item) => {
    e.preventDefault();
    dispatch({ type: ADD_ITEM, payload: item });
  };

  const toggleItem = itemId => {
    dispatch({ type: TOGGLE_ITEM, payload: itemId });
  };

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({ type: CLEAR_COMPLETED });
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Shopping List</h1>
        <ListForm addItem={addItem} />
      </div>
      <TodoList
        todo={state.todo}
        toggleItem={toggleItem}
        clearCompleted={clearCompleted}
      />
    </div>
  );
};

export default App;
