export default function TaskList({ tasks, toggleTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span
            onClick={() => toggleTask(task.id)}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              cursor: "pointer"
            }}
          >
            {task.title}
          </span>
        </li>
      ))}
    </ul>
  );
}