import React from "react";

export default function Header({ name, onAddTaskToggle }) {
  console.log(name);
  return (
    <header className="headerContainer">
      <h1>Welcome to {name}</h1>
      <button onClick={onAddTaskToggle}>Add Task</button>
    </header>
  );
}
