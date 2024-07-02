// src/redux/store.js
import { createStore } from "redux";
import taskReducer from "./Reducer";

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.tasks);
    localStorage.setItem("tasks", serializedState);
  } catch (e) {
    console.warn("Failed to save state", e);
  }
};

const store = createStore(
  taskReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
