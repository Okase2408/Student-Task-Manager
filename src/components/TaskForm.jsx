import { useState, useEffect } from "react";

function TaskForm({
    onAddTask,
    onEditTask,
    editingTask,
    onCancelEdit
}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("School");
    const [priority, setPriority] = useState("Medium");

    useEffect(() => {
        if (editingTask) {
            setTitle(editingTask.title);
            setDescription(editingTask.description || "");
            setCategory(editingTask.category);
            setPriority(editingTask.priority);
        }
    }, [editingTask]);

    function handleSubmit(e) {
        e.preventDefault();

        if (title.trim() === "") {
            return;
        }

        if (editingTask) {
            const updatedTask = {
                ...editingTask,
                title: title,
                description: description,
                category: category,
                priority: priority
            };

            onEditTask(updatedTask);
        } else {
            const newTask = {
                id: Date.now(),
                title: title,
                description: description,
                category: category,
                priority: priority,
                completed: false,
                createdAt: new Date().toLocaleDateString()
            };

            onAddTask(newTask);
        }

        setTitle("");
        setDescription("");
        setCategory("School");
        setPriority("Medium");
    }

    return (
        <section className="task-form-section">
            <div className="section-heading">
                <h2>{editingTask ? "Edit Task" : "Add a New Task"}</h2>

                <p>
                    {editingTask
                        ? "Update your task details below."
                        : "Create a task and keep your workload organized."}
                </p>
            </div>

            <form className="task-form" onSubmit={handleSubmit}>
                <div className="form-group title-group">
                    <label>Task Title</label>

                    <input
                        type="text"
                        placeholder="e.g. Complete React assignment"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="form-group description-group">
                    <label>Description</label>

                    <textarea
                        placeholder="Add a little more detail about this task..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="3"
                    ></textarea>
                </div>

                <div className="form-group">
                    <label>Category</label>

                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option>School</option>
                        <option>Personal</option>
                        <option>Programming</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Priority</label>

                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                    >
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                </div>
<div className="form-buttons">
    <button className="add-task-button" type="submit">
        {editingTask ? "Save Changes" : "Add Task"}
    </button>

    {editingTask && (
        <button
            className="cancel-button"
            type="button"
            onClick={onCancelEdit}
        >
            Cancel
        </button>
    )}
</div>
            </form>
        </section>
    );
}

export default TaskForm;