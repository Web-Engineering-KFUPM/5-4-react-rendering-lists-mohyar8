import DueBadge from "./DueBadge";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task">
      <label className="taskMain">
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={() => onToggle(task.id)}
        />
        <span className={task.isDone ? "done" : ""}>{task.title}</span>
        {/* Show badge only if task not done */}
        {!task.isDone && <DueBadge dueDate={task.dueDate} />}
      </label>

      <button
        className="ghost"
        aria-label="Delete task"
        onClick={() => onDelete(task.id)}
      >
        ✕
      </button>
    </li>
  );
}
