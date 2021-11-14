export const appStateReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    }
    case "UPDATE_TASK": {
      const { payload } = action;
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === payload.id) {
            return {
              ...payload,
            };
          }
          return task;
        }),
      };
    }

    case "REMOVE_TASK": {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    }

    default:
      return state;
  }
};
