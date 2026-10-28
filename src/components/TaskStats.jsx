function TaskStats({ tasks }) {
    const totalTasks = tasks.length;

    const completedTasks = tasks.filter(
        (task) => task.completed
    ).length;

    const activeTasks = tasks.filter(
        (task) => !task.completed
    ).length;

    return (
        <section className="stats">
            <div className="stat-card total-stat">
                <p>Total Tasks</p>
                <h2>{totalTasks}</h2>
            </div>

            <div className="stat-card completed-stat">
                <p>Completed</p>
                <h2>{completedTasks}</h2>
            </div>

            <div className="stat-card active-stat">
                <p>Active</p>
                <h2>{activeTasks}</h2>
            </div>
        </section>
    );
}

export default TaskStats;