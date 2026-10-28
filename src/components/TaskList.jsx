import TaskCard from "./TaskCard";
import EmptyState from "./EmptyState";

function TaskList({
    tasks,
    allTasks,
    onToggleTask,
    onDeleteTask,
    onEditTask
}) {
    if (tasks.length === 0) {
        return <EmptyState hasTasks={allTasks.length > 0} />;
    }

    return (
        <div>
            {tasks.map((task) => (
                <TaskCard
                    key={task.id}
                    task={task}
                    onToggleTask={onToggleTask}
                    onDeleteTask={onDeleteTask}
                    onEditTask={onEditTask}
                />
            ))}
        </div>
    );
}

export default TaskList;