import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TasksList from "./components/TasksList";

function App() {
  const appName = "My App";
  const [showForm, setShowForm] = useState(false);

  const onAddTaskToggle = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <Header name={appName} onAddTaskToggle={onAddTaskToggle} />
      {showForm && <AddTask />}
      <ul>
        <TasksList />
      </ul>
    </div>
  );
}

export default App;
