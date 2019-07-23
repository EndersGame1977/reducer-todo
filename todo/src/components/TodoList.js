import React from "react";

import Item from "../components/Item";

export default function TodoList(props) {
  return (
    <div>
      {props.todo.map(item => (
        <Item key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button
        className="waves-effect waves-light btn"
        onClick={props.clearCompleted}
      >
        Clear Completed
      </button>
    </div>
  );
}
