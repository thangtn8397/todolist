import React from "react";
import FormContainer from "../FormContainer";
import Input from "../common/Input";
import TodoListItem from "./TodoListItem";
import clsx from "clsx";
import styles from "./TodoList.module.css";

const TodoList = ({ className }) => {
  return (
    <FormContainer
      title="To Do List"
      className={clsx(styles.FormContainer, className)}
    >
      <Input placeholder="Search..." />
      <TodoListItem text="Do homework" />
      <TodoListItem text="Play game hihi" />
      <TodoListItem text="Do housework" />
    </FormContainer>
  );
};

export default TodoList;
