import axios from "axios";
import { useRef, useState } from "react";

function TaskForm({ userId, setError, setTasks }) {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const handleAddTask = async () => {
    const task = inputRef.current.value;
    if (!task || !task.trim()) {
      setError("please enter a task");
      return;
    }
    if (!userId) {
      userId = crypto.randomUUID();
      localStorage.setItem("userId", userId);
    }
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/tasks", {
        userId: userId,
        title: task,
      });
      setTasks((prev) => {
        return [...prev, res.data.data];
      });
      inputRef.current.value = "";
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Add a new task..."
        ref={inputRef}
        disabled={loading}
        className="flex-1 px-4 py-2 border border-(--border) rounded-lg bg-(--bg) text-(--text) placeholder-gray-400 focus:outline-none focus:border-(--accent) focus:ring-2 focus:ring-(--accent-bg) transition-all"
      />
      <button
        onClick={handleAddTask}
        disabled={loading}
        className="cursor-pointer px-6 py-2 bg-(--accent) text-(--bg) rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Adding..." : "Add"}
      </button>
    </div>
  );
}
export default TaskForm;
