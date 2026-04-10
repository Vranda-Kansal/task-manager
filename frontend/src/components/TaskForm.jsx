import axios from "axios";
import { useRef } from "react";

function TaskForm({ userId, setError, setTasks }) {
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
    }
  };
  return (
    <div>
      <input type="text" placeholder="Add a new task..." ref={inputRef} />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
}
export default TaskForm;
