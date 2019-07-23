import React from "react";
import "./item.css";

export default function Item(props) {
  return (
    <div className="container" onClick={() => props.toggleItem(props.item.id)}>
      <p className={`item${props.item.completed ? " completed" : ""} chip`}>
        {props.item.name}
      </p>
    </div>
  );
}
