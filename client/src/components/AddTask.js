import React, { useState } from "react";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted ", { title: title, date: date });
    try {
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title: title, date: date }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (err) {
      console.log("post ", err);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Date</label>
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
      </div>
      <input type="submit" value="Save Task" />
    </form>
  );
}
