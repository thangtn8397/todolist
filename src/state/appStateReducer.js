export const appStateReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    }
    default:
      return state;
  }
};
