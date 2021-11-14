import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { removeTask, updateTask } from "../../../state/actions";
import { useAppState } from "../../../state/AppStateContext";
import { Input, Button } from "../../common";
import TaskForm from "../../TaskForm";
import styles from "./TodoListItem.module.css";

const TodoListItem = ({ onOpenDetail, onSelectCheckbox, task }) => {
  const [showDetail, setShowDetail] = useState(false);
  const [taskState, setTaskState] = useState(task);
  const { tasks, dispatch } = useAppState();

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
            onChange={onSelectCheckbox}
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
      <div className={styles.Detail}>
        {showDetail && (
          <TaskForm
            formAction="Update"
            task={taskState}
            onChangeInput={onChangeInput}
            onSubmit={onUpdateTask}
          />
        )}
      </div>
    </div>
  );
};

export default TodoListItem;
