import React from "react";
import FormContainer from "../FormContainer";
import TaskForm from "../TaskForm";
import styles from "./AddNewTaskForm.module.css";
import clsx from "clsx";

const AddNewTaskForm = ({ className }) => {
  return (
    <FormContainer
      title="New Task"
      className={clsx(styles.AddNewTaskForm, className)}
    >
      <TaskForm />
    </FormContainer>
  );
};

export default AddNewTaskForm;
