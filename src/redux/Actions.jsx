// src/redux/actions.js
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";

export const addTask = (text) => ({
  type: ADD_TASK,
  payload: text,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const editTask = (taskId, text) => ({
  type: EDIT_TASK,
  payload: { taskId, text },
});

export const toggleTask = (taskId) => ({
  type: TOGGLE_TASK,
  payload: taskId,
});
