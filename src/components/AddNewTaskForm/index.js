import React from "react";
import FormContainer from "../FormContainer";
import TaskForm from "../TaskForm";
import styles from "./AddNewTaskForm.module.css";
import clsx from "clsx";
import { useAppState } from "../../state/AppStateContext";
import { addTask } from "../../state/actions";
import { nanoid } from "nanoid";

const AddNewTaskForm = ({ className }) => {
  const { dispatch } = useAppState();
  return (
    <FormContainer
      title="New Task"
      className={clsx(styles.AddNewTaskForm, className)}
    >
      <TaskForm
        onSubmit={(task) => {
          const newTask = {
            id: nanoid(),
            ...task,
          };
          dispatch(addTask(newTask));
        }}
      />
    </FormContainer>
  );
};

export default AddNewTaskForm;
