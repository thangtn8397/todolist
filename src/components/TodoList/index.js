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

  const [showBulkAction, setShowBulkAction] = useState(false);
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
            return <TodoListItem key={task.id} task={task} />;
          })}
      </div>
      <BulkAction show={showBulkAction} />
    </FormContainer>
  );
};

export default TodoList;
