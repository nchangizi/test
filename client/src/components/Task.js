import React from "react";
import { FaTimes } from "react-icons/fa";

export default function Task({ task, deleteHandler }) {
  //   const onDelete = () => {
  //     deleteHandler(task.id);
  //   };
  return (
    <li>
      <div className="taskContainer">
        <div className="iconNameContainer">
          <p>{task.title}</p>
          <FaTimes onClick={() => deleteHandler(task._id)} />
        </div>

        <p>{task.date}</p>
      </div>
    </li>
  );
}
