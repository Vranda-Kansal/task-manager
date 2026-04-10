import express from "express";
import Task from "../models/Taskmodel.js";

const router = express.Router();

// GET all tasks for a specific user
router.get("/tasks/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    // Validation
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User ID is required",
      });
    }

    const tasks = await Task.find({ userId });
    res.status(200).json({
      success: true,
      data: tasks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching tasks",
      error: error.message,
    });
  }
});

// POST create a new task
router.post("/tasks", async (req, res) => {
  try {
    const { userId, title } = req.body;

    // Validation
    if (!userId || userId.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "User ID is required",
      });
    }

    if (!title || title.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Title is required and cannot be empty",
      });
    }

    const newTask = await Task.create({
      userId: userId.trim(),
      title: title.trim(),
      completed: false,
    });

    res.status(201).json({
      success: true,
      message: "Task created successfully",
      data: newTask,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating task",
      error: error.message,
    });
  }
});

// PATCH update task status
router.patch("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;

    // Validation
    if (typeof completed !== "boolean") {
      return res.status(400).json({
        success: false,
        message: "Completed field must be a boolean (true/false)",
      });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { completed },
      { returnDocument: "after", runValidators: true },
    );

    if (!updatedTask) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Task updated successfully",
      data: updatedTask,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating task",
      error: error.message,
    });
  }
});

// DELETE a task
router.delete("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Task deleted successfully",
      data: deletedTask,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting task",
      error: error.message,
    });
  }
});

export default router;
