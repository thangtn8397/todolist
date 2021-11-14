export const addTask = (task) => ({
  type: "ADD_TASK",
  payload: task,
});

export const updateTask = (task) => ({
  type: "UPDATE_TASK",
  payload: task,
});

export const removeTask = (idTask) => ({
  type: "REMOVE_TASK",
  payload: idTask,
});
