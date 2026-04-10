import axios from "axios";
function TaskList({ tasks, setTasks, setError }) {
  const updateTask = async (taskId, status) => {
    try {
      const updatedTask = await axios.patch(
        `http://localhost:5000/tasks/${taskId}`,
        {
          id: taskId,
          completed: !status,
        },
      );

      setTasks((prev) => {
        return prev.map((task) =>
          task._id === taskId ? updatedTask.data.data : task,
        );
      });
    } catch (err) {
      setError(err);
    }
  };
  const handletoggle = (taskId, status) => {
    updateTask(taskId, status);
  };
  const handleDelete = async (taskId) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${taskId}`, {
        id: taskId,
      });
      setTasks((prev) => {
        return prev.filter((task) => task._id !== taskId);
      });
    } catch (err) {
      setError(err);
    }
  };
  return (
    <div>
      {tasks?.map((task) => {
        return (
          <div key={task._id} className="flex gap-5">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handletoggle(task._id, task.completed)}
            />
            <div>{task.title}</div>
            <button onClick={() => handleDelete(task._id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
export default TaskList;
