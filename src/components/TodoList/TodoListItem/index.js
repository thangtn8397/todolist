import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { removeTask, updateTask } from "../../../state/actions";
import { useAppState } from "../../../state/AppStateContext";
import { Input, Button } from "../../common";
import TaskForm from "../../TaskForm";
import styles from "./TodoListItem.module.css";

const TodoListItem = ({ onOpenDetail, onSelectTask, task }) => {
  const [showDetail, setShowDetail] = useState(false);
  const [taskState, setTaskState] = useState(task);
  const { dispatch } = useAppState();

  const onChangeInput = (e) => {
    setTaskState({
      ...taskState,
      [e.target.name]: e.target.value,
    });
  };

  const onUpdateTask = () => {
    dispatch(updateTask(taskState));
  };

  const onRemoveTask = () => {
    dispatch(removeTask(taskState.id));
  };

  useEffect(() => {
    setTaskState(task);
  }, [task]);

  return (
    <div className={clsx(styles.TodoListItem)} onClick={onOpenDetail}>
      <div className={clsx(styles.Header, styles.Flex)}>
        <div className={styles.Flex}>
          <Input
            type="checkbox"
            className={styles.Checkbox}
            onChange={onSelectTask}
          />
          <p>{task.title}</p>
        </div>
        <div className={styles.Flex}>
          <Button
            value="Detail"
            className={styles.BtnDetail}
            clicked={() => {
              setShowDetail(!showDetail);
            }}
          />
          <Button btnType="danger" value="Remove" clicked={onRemoveTask} />
        </div>
      </div>
      <div className={showDetail ? styles.Detail : styles.Hidden}>
        <TaskForm
          formAction="Update"
          task={taskState}
          onChangeInput={onChangeInput}
          onSubmit={onUpdateTask}
        />
      </div>
    </div>
  );
};

export default TodoListItem;
