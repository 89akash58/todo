// src/components/TaskInput.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/Actions";
import "./TaskInput.css";
const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask("");
    }
  };

  return (
    <div className="container">
      <h1>TO DO LIST</h1>
      <div className="task">
        <input
          type="text"
          className="inputtext"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTask} className="add">
          Add
        </button>
      </div>
    </div>
  );
};

export default TaskInput;
