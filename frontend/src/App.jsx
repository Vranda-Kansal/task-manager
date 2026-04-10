import { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [userid, setuserId] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  console.log(tasks);

  const fetchTasks = async (userId) => {
    setError(null);
    try {
      const response = await fetch(`http://localhost:5000/tasks/${userId}`);
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

  return (
    <>
      <TaskForm userId={userid} setError={setError} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} setError={setError} />
    </>
  );
}

export default App;
