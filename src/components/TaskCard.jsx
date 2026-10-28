function TaskCard({ task, onToggleTask, onDeleteTask, onEditTask }) {
    return (
        <article className={`task-card ${task.completed ? "completed-task" : ""}`}>
            <div className="task-main">
                <div className="task-check">
                    <span>{task.completed ? "✓" : "○"}</span>
                </div>

                <div className="task-info">
                    <div className="task-title-row">
                        <h3>{task.title}</h3>

                        <span className={`priority priority-${task.priority.toLowerCase()}`}>
                            {task.priority}
                        </span>
                    </div>
                    {task.description && (
    <p className="task-description">
        {task.description}
    </p>
)}

                    <div className="task-details">
                        <span>📚 {task.category}</span>

                        <span>
                            {task.completed ? "✓ Completed" : "○ Active"}
                        </span>

                        {task.createdAt && (
                            <span>📅 Added {task.createdAt}</span>
                        )}
                    </div>
                </div>
            </div>

            <div className="task-actions">
                <button
                    className="complete-button"
                    onClick={() => onToggleTask(task.id)}
                >
                    {task.completed ? "Undo" : "Complete"}
                </button>
                <button
    className="edit-button"
    onClick={() => onEditTask(task)}
>
    Edit
</button>

                <button
                    className="delete-button"
                    onClick={() => onDeleteTask(task.id)}
                >
                    Delete
                </button>
            </div>
        </article>
    );
}

export default TaskCard;