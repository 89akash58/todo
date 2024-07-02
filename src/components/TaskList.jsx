// src/components/TaskList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, editTask, toggleTask } from "../redux/Actions";
import "./TaskList.css";
const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleEdit = (taskId, currentText) => {
    const newTaskText = prompt("Edit task:", currentText);
    if (newTaskText !== null) {
      dispatch(editTask(taskId, newTaskText));
    }
  };

  const handleToggle = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  return (
    <div className="listcontainer">
      <ul>
        <div className="all">
          <h4 style={{ color: "grey" }}>Added Tasks :</h4>
          {tasks.map((task) => (
            <li key={task.id}>
              <input
                type="checkbox"
                className="giventask"
                checked={task.completed}
                onChange={() => handleToggle(task.id)}
              />
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.text}
              </span>
              <div className="editdelete">
                <button
                  className="edit"
                  onClick={() => handleEdit(task.id, task.text)}
                >
                  Edit
                </button>
                <button
                  className="delete"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default TaskList;
