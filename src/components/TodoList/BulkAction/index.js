import React from "react";
import styles from "./BulkAction.module.css";
import { Button } from "../../common";
import { useAppState } from "../../../state/AppStateContext";
import { removeTask } from "../../../state/actions";

const BulkAction = ({ show, selectedTasks }) => {
  const { dispatch } = useAppState();

  const onRemoveTasks = () => {
    selectedTasks.forEach((id) => {
      dispatch(removeTask(id));
    });
  };

  return (
    show && (
      <div className={styles.BulkAction}>
        <p>Bulk Action:</p>
        <div className={styles.Actions}>
          <Button className={styles.BtnDone} value="Done" />
          <Button btnType="danger" value="Remove" clicked={onRemoveTasks} />
        </div>
      </div>
    )
  );
};

export default BulkAction;
