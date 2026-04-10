import axios from "axios";
import { useState } from "react";

function TaskList({ tasks, setTasks, setError }) {
  const [loadingId, setLoadingId] = useState(null);
  const updateTask = async (taskId, status) => {
    setLoadingId(taskId);
    try {
      const updatedTask = await axios.patch(
        `http://localhost:5000/tasks/${taskId}`,
        {
          completed: !status,
        },
      );
      setTasks((prev) => {
        return prev.map((task) =>
          task._id === taskId ? updatedTask.data.data : task,
        );
      });
    } catch (err) {
      setError(err.message || "Failed to update task");
    } finally {
      setLoadingId(null);
    }
  };

  const handleDelete = async (taskId) => {
    setLoadingId(taskId);
    try {
      await axios.delete(`http://localhost:5000/tasks/${taskId}`);
      setTasks((prev) => {
        return prev.filter((task) => task._id !== taskId);
      });
    } catch (err) {
      setError(err.message || "Failed to delete task");
    } finally {
      setLoadingId(null);
    }
  };

  if (tasks.length === 0) {
    return (
      <p className="text-center text-(--text) py-8">
        No tasks yet. Add one to get started! 🚀
      </p>
    );
  }

  return (
    <div className="space-y-2">
      {tasks?.map((task) => {
        return (
          <div
            key={task._id}
            className="flex items-center gap-4 p-4 border border-(--border) rounded-lg bg-(--bg) hover:border-(--accent) transition-colors"
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => updateTask(task._id, task.completed)}
              className="w-5 h-5 cursor-pointer accent-(--accent)"
            />
            <span
              className={`flex-1 ${
                task.completed
                  ? "line-through text-(--text) opacity-60"
                  : "text-(--text-h) font-medium"
              }`}
            >
              {task.title}
            </span>
            <button
              onClick={() => handleDelete(task._id)}
              disabled={loadingId === task._id}
              className="cursor-pointer px-3 py-1 text-sm bg-red-500/20 text-red-500 rounded-md hover:bg-red-500/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loadingId === task._id ? "Processing..." : "Delete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TaskList;
