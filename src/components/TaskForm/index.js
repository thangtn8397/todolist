import React from "react";
import clsx from "clsx";
import { getNow } from "../../utils";
import { Button, Input } from "../common";
import Dropdown from "../common/Dropdown";
import styles from "./TaskForm.module.css";

const TaskForm = ({
  formAction = "Add",
  onSubmit,
  className,
  task,
  onChangeInput,
  onChangePriority,
}) => {
  return (
    <div className={clsx(styles.TaskForm, className)}>
      <Input
        placeholder="Add new task..."
        inputType="text"
        name="title"
        value={task.title}
        onChange={onChangeInput}
      />
      <Input
        inputType="textarea"
        label="Description"
        name="description"
        value={task.description}
        onChange={onChangeInput}
      />
      <div className={styles.Flex}>
        <Input
          type="date"
          label="Due date"
          name="dueDate"
          value={task.dueDate}
          onChange={onChangeInput}
          min={getNow()}
        />
        <Dropdown
          label="Priority"
          onChange={onChangePriority}
          value={task.priority}
          array={priorityArray}
        />
      </div>
      <Button
        btnType="success"
        value={formAction}
        className={styles.BtnAdd}
        clicked={() => onSubmit(task)}
        disabled={!task.title.length > 0}
      />
    </div>
  );
};

export default TaskForm;
const priorityArray = ["Normal", "High", "Low"];
