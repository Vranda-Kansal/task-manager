function TaskFilter({ filter, setFilter }) {
  return (
    <div className="flex gap-2 mb-6">
      <button
        onClick={() => setFilter("all")}
        className={`px-4 py-2 rounded-lg font-semibold transition-all ${
          filter === "all"
            ? "bg-(--accent) text-(--bg)"
            : "bg-(--border) text-(--text) hover:bg-(--accent-bg)"
        }`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("active")}
        className={`px-4 py-2 rounded-lg font-semibold transition-all ${
          filter === "active"
            ? "bg-(--accent) text-(--bg)"
            : "bg-(--border) text-(--text) hover:bg-(--accent-bg)"
        }`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={`px-4 py-2 rounded-lg font-semibold transition-all ${
          filter === "completed"
            ? "bg-(--accent) text-(--bg)"
            : "bg-(--border) text-(--text) hover:bg-(--accent-bg)"
        }`}
      >
        Completed
      </button>
    </div>
  );
}

export default TaskFilter;
