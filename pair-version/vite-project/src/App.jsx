import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (title) => {
    setTasks([
      ...tasks,
      { id: Date.now(), title, completed: false }
    ]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="app-container">
      <h1>Task Manager</h1>

      <TaskInput addTask={addTask} />

      <Filter setFilter={setFilter} />

      <TaskList tasks={filteredTasks} toggleTask={toggleTask} />
    </div>
  );
}