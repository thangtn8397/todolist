import clsx from "clsx";
import React from "react";
import Button from "../common/Button";
import Dropdown from "../common/Dropdown";
import Input from "../common/Input";
import styles from "./TaskForm.module.css";

const TaskForm = ({ formAction = "Add", onSubmit, className }) => {
  return (
    <div className={clsx(styles.TaskForm, className)}>
      <Input placeholder="Add new task..." inputType="text" />
      <Input inputType="textarea" label="Description" />
      <div className={styles.Flex}>
        <Input type="date" label="Due date" />
        <Dropdown label="Priority" />
      </div>
      <Button
        btnType="success"
        value={formAction}
        className={styles.BtnAdd}
        onClick={onSubmit}
      />
    </div>
  );
};

export default TaskForm;
