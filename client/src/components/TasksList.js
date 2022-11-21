import React, { useEffect, useState } from "react";
import Task from "./Task";

export default function TasksList() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/tasks");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json(); // parse it to JS
        setTasks(data);
        setIsLoading(false);
        // console.log(data);
      } catch (err) {
        console.log("fetch data ", err);
      }
    };
    fetchData();
  }, []); //[] only on the first render

  const deletePressed = async (deletedId) => {
    try {
      const response = await fetch(`/tasks/${deletedId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (err) {
      console.log("delete ", err);
    }
    const result = tasks.filter((item) => {
      return item.id !== deletedId;
    });
    setTasks(result);
  };
  // if (tasks.length === 0) {
  //   return <li>No task left!</li>;
  // }
  // return tasks.map((item) => (
  //   <Task key={item.id} task={item} deleteHandler={deletePressed} />
  // ));
  if (isLoading) {
    return <p>Loading</p>;
  }
  return tasks.length === 0 ? (
    <li>No task left!</li>
  ) : (
    tasks.map((item) => (
      <Task key={item._id} task={item} deleteHandler={deletePressed} />
    ))
  );
}
