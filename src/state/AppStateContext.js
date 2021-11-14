import { createContext, useContext, useReducer } from "react";
import { appStateReducer } from "./appStateReducer";

const appData = {
  tasks: [
    {
      id: "1",
      title: "Do homework",
      description: "Do homeworkDo homeworkDo homeworkDo homework",
      dueDate: "2021-11-15",
      priority: "normal",
    },
    {
      id: "2",
      title: "Do homework",
      description: "Do homeworkDo homeworkDo homeworkDo homework",
      dueDate: "2021-11-15",
      priority: "normal",
    },
    {
      id: "3",
      title: "Do homework",
      description: "Do homeworkDo homeworkDo homeworkDo homework",
      dueDate: "2021-11-15",
      priority: "normal",
    },
    {
      id: "4",
      title: "Do homework",
      description: "Do homeworkDo homeworkDo homeworkDo homework",
      dueDate: "2021-11-15",
      priority: "normal",
    },
  ],
  filter: "",
};

const AppStateContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appStateReducer, appData);
  const { tasks, filter } = state;
  return (
    <AppStateContext.Provider value={{ tasks, dispatch, filter }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
