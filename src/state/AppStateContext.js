import { createContext, useContext, useReducer } from "react";
import { appStateReducer } from "./appStateReducer";

const appData = {
  tasks: [
    {
      id: "1",
      title: "Do homework",
      description: "Do homeworkDo homeworkDo homeworkDo homework",
      dueDate: "11/15/2021",
      priority: "normal",
    },
    {
      id: "2",
      title: "Do homework",
      description: "Do homeworkDo homeworkDo homeworkDo homework",
      dueDate: "11/15/2021",
      priority: "normal",
    },
    {
      id: "3",
      title: "Do homework",
      description: "Do homeworkDo homeworkDo homeworkDo homework",
      dueDate: "11/15/2021",
      priority: "normal",
    },
    {
      id: "4",
      title: "Do homework",
      description: "Do homeworkDo homeworkDo homeworkDo homework",
      dueDate: "11/15/2021",
      priority: "normal",
    },
  ],
};

const AppStateContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appStateReducer, appData);
  const { tasks } = state;
  return (
    <AppStateContext.Provider value={{ tasks, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
