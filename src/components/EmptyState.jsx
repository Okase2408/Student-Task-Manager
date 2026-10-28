function EmptyState({ hasTasks }) {
    return (
        <div className="empty-state">
            <div className="empty-icon">
                {hasTasks ? "⌕" : "✿"}
            </div>

            <h2>
                {hasTasks ? "No matching tasks" : "No tasks here yet"}
            </h2>

            <p>
                {hasTasks
                    ? "Try changing your search or filter."
                    : "Add a task above and start getting things done."}
            </p>
        </div>
    );
}

export default EmptyState;