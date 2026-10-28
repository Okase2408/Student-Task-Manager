function FilterBar({ searchTerm, setSearchTerm, filter, setFilter }) {
    return (
        <section className="task-controls">
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Search tasks..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="filter-buttons">
                <button
                    className={filter === "All" ? "active-filter" : ""}
                    onClick={() => setFilter("All")}
                >
                    All
                </button>

                <button
                    className={filter === "Active" ? "active-filter" : ""}
                    onClick={() => setFilter("Active")}
                >
                    Active
                </button>

                <button
                    className={filter === "Completed" ? "active-filter" : ""}
                    onClick={() => setFilter("Completed")}
                >
                    Completed
                </button>
            </div>
        </section>
    );
}

export default FilterBar;