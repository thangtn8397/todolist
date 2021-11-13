import React from "react";
import Button from "../Button";
import Input from "../Input";
import styles from "./TaskForm.module.css";

const TaskForm = () => {
  return (
    <div>
      <Input label="add task" placeholder="Add new task" inputType="text" />
      <Input inputType="textarea" label="Description" />
      <div className={styles.Flex}>
        <Input type="date" label="Due date" />
        <Input label="Piority" />
      </div>
      <Button btnType="success" value="Add" className={styles.BtnAdd} />
    </div>
  );
};

export default TaskForm;
