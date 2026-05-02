import { useState } from "react";

export default function TaskInput({ addTask }) {
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (title.trim() === "") return;
    addTask(title);
    setTitle("");
  };

  return (
    <div style={{ marginBottom: "15px" }}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}