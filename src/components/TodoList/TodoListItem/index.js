import clsx from "clsx";
import React, { useState } from "react";
import { Input, Button } from "../../common";
import TaskForm from "../../TaskForm";
import styles from "./TodoListItem.module.css";

const TodoListItem = ({ text, openDetail }) => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <div className={clsx(styles.TodoListItem)} onClick={openDetail}>
      <div className={clsx(styles.Header, styles.Flex)}>
        <div className={styles.Flex}>
          <Input type="checkbox" className={styles.Checkbox} />
          <p>{text}</p>
        </div>
        <div className={styles.Flex}>
          <Button
            value="Detail"
            className={styles.BtnDetail}
            clicked={() => {
              console.log(showDetail);
              setShowDetail(!showDetail);
            }}
          />
          <Button btnType="danger" value="Remove" />
        </div>
      </div>
      <div className={styles.Detail}>
        {showDetail && <TaskForm formAction="Update" />}
      </div>
    </div>
  );
};

export default TodoListItem;
