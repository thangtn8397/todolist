import React, { useState } from "react";
import FormContainer from "../FormContainer";
import TodoListItem from "./TodoListItem";
import clsx from "clsx";
import styles from "./TodoList.module.css";
import BulkAction from "./BulkAction";
import { useAppState } from "../../state/AppStateContext";
import SearchBar from "../SearchBar";

const TodoList = ({ className }) => {
  const { tasks, filter } = useAppState();
  const [selectedTaskIds, setSelectedTaskIds] = useState([]);

  const onSelectedTask = (taskId) => {
    const index = selectedTaskIds.indexOf(taskId);
    if (index > 0) {
      setSelectedTaskIds(
        ...selectedTaskIds.slice(0, index),
        ...selectedTaskIds.slice(index + 1)
      );
    } else {
      setSelectedTaskIds([...selectedTaskIds, taskId]);
    }
  };

  return (
    <FormContainer
      title="To Do List"
      className={clsx(styles.FormContainer, className)}
    >
      <SearchBar className={styles.SearchBar} />
      <div>
        {tasks
          ?.filter((task) => task.title.toLowerCase().includes(filter))
          .map((task) => {
            return (
              <TodoListItem
                key={task.id}
                task={task}
                onSelectTask={() => onSelectedTask(task.id)}
              />
            );
          })}
      </div>
      <BulkAction
        show={selectedTaskIds?.length > 0}
        selectedTasks={selectedTaskIds}
      />
    </FormContainer>
  );
};

export default TodoList;
