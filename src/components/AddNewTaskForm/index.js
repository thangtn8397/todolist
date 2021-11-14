import React, { useState } from "react";
import FormContainer from "../FormContainer";
import TaskForm from "../TaskForm";
import styles from "./AddNewTaskForm.module.css";
import clsx from "clsx";
import { useAppState } from "../../state/AppStateContext";
import { addTask } from "../../state/actions";
import { nanoid } from "nanoid";
import { getNow } from "../../utils";

const defaultTask = {
  title: "",
  description: "",
  dueDate: getNow(),
  priority: "Normal",
};

const AddNewTaskForm = ({ className }) => {
  const { dispatch } = useAppState();
  const [task, setTask] = useState(defaultTask);

  const onChangeInput = (event) => {
    setTask({
      ...task,
      [event.target.name]: event.target.value,
    });
  };

  const onChangePriority = (priority) => {
    setTask({
      ...task,
      priority: priority,
    });
  };

  const addNewTask = (task) => {
    const newTask = {
      id: nanoid(),
      ...task,
    };
    dispatch(addTask(newTask));
    setTask(defaultTask);
  };

  return (
    <FormContainer
      title="New Task"
      className={clsx(styles.AddNewTaskForm, className)}
    >
      <TaskForm
        onSubmit={(task) => {
          addNewTask(task);
        }}
        onChangeInput={onChangeInput}
        onChangePriority={onChangePriority}
        task={task}
      />
    </FormContainer>
  );
};

export default AddNewTaskForm;
