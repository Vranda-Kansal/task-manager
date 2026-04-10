import { useEffect, useMemo, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import ThemeToggle from "./components/ThemeToggle";
import TaskFilter from "./components/TaskFilter";
import BASE_URL from "./config/api";

function App() {
  const [userid, setuserId] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");

  const fetchTasks = async (userId) => {
    setError(null);
    try {
      const response = await fetch(`${BASE_URL}/tasks/${userId}`);
      const data = await response.json();
      if (data.success) {
        setTasks(data.data);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Failed to fetch tasks");
    }
  };
  useEffect(() => {
    let userID = localStorage.getItem("userId");
    if (!userID || userID === "null") {
      userID = crypto.randomUUID();
      localStorage.setItem("userId", userID);
    }
    setuserId(userID);
  }, []);
  useEffect(() => {
    if (userid) {
      fetchTasks(userid);
    }
  }, [userid]);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (filter === "active") return !task.completed;
      if (filter === "completed") return task.completed;
      return true;
    });
  }, [tasks, filter]);

  return (
    <div className="min-h-screen bg-(--bg) text-(--text) transition-colors p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-(--text-h)">Task Manager</h1>
          <ThemeToggle />
        </div>
        {error && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 text-red-600 rounded-lg flex justify-between items-center">
            <span>{error.message || error}</span>
            <button
              onClick={() => setError(null)}
              className="text-red-600 hover:text-red-700 font-bold"
            >
              ✕
            </button>
          </div>
        )}
        <TaskForm userId={userid} setError={setError} setTasks={setTasks} />
        <TaskFilter filter={filter} setFilter={setFilter} />
        <TaskList
          tasks={filteredTasks}
          setTasks={setTasks}
          setError={setError}
        />
      </div>
    </div>
  );
}

export default App;
