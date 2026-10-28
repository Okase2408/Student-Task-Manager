
import { useState, useEffect } from "react";

import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskStats from "./components/TaskStats";
import FilterBar from "./components/FilterBar";

function App() {
    const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
});
    const [searchTerm, setSearchTerm] = useState("");
    const[filter, setFilter]= useState("All");
    const [editingTask, setEditingTask] = useState(null);
useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

    function addTask(newTask){
        setTasks([...tasks, newTask])
    }
    function toggleTask(id) {
    setTasks(
        tasks.map((task) =>
            task.id === id
                ? { ...task, completed: !task.completed }
                : task
        )
    );
}

function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
}
function editTask(updatedTask) {
    setTasks(
        tasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
        )
    );

    setEditingTask(null);
}
function startEditing(task) {
    setEditingTask(task);
}
const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesFilter =
        filter === "All" ||
        (filter === "Active" && !task.completed) ||
        (filter === "Completed" && task.completed);

    return matchesSearch && matchesFilter;
});

    return (
        <div className="app">
           <Header />
            <TaskStats tasks={tasks} />
       <TaskForm
    onAddTask={addTask}
    onEditTask={editTask}
    editingTask={editingTask}
    onCancelEdit={() => setEditingTask(null)}
/>
              <FilterBar
    searchTerm={searchTerm}
    setSearchTerm={setSearchTerm}
    filter={filter}
    setFilter={setFilter}
/>
       <TaskList
    tasks={filteredTasks}
    allTasks={tasks}
    onToggleTask={toggleTask}
    onDeleteTask={deleteTask}
    onEditTask={startEditing}
/>

        </div>
    );
}

export default App;