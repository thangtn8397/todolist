import React, { useState } from "react";
import FormContainer from "../FormContainer";
import Input from "../common/Input";
import TodoListItem from "./TodoListItem";
import clsx from "clsx";
import styles from "./TodoList.module.css";
import BulkAction from "./BulkAction";
import { useAppState } from "../../state/AppStateContext";

const TodoList = ({ className }) => {
  const { tasks } = useAppState();

  const [showBulkAction, setShowBulkAction] = useState(false);
  return (
    <FormContainer
      title="To Do List"
      className={clsx(styles.FormContainer, className)}
    >
      <Input placeholder="Search..." />
      <div>
        {tasks.map((task) => (
          <TodoListItem title={task.title} key={task.id} />
        ))}
      </div>
      <BulkAction show={showBulkAction} />
    </FormContainer>
  );
};

export default TodoList;
