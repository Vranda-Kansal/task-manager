import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: [true, "User ID is required"],
      trim: true,
    },
    title: {
      type: String,
      required: [true, "Task title is required"],
      trim: true,
      minlength: [1, "Title cannot be empty"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const Taskmodel = mongoose.model("Taskmodel", taskSchema);

export default Taskmodel;
