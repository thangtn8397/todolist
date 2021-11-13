import React, { useState } from "react";
import FormContainer from "../FormContainer";
import Input from "../common/Input";
import TodoListItem from "./TodoListItem";
import clsx from "clsx";
import styles from "./TodoList.module.css";
import BulkAction from "./BulkAction";

const TodoList = ({ className }) => {
  const [showBulkAction, setShowBulkAction] = useState(false);
  return (
    <FormContainer
      title="To Do List"
      className={clsx(styles.FormContainer, className)}
    >
      <Input placeholder="Search..." />
      <div>
        <TodoListItem text="Do homework" />
        <TodoListItem text="Play game hihi" />
        <TodoListItem text="Do housework" />
        <TodoListItem text="Do housework" />
      </div>
      <BulkAction show={showBulkAction} />
    </FormContainer>
  );
};

export default TodoList;
