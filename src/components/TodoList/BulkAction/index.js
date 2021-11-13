import React from "react";
import styles from "./BulkAction.module.css";
import { Button } from "../../common";

const BulkAction = ({ show }) => {
  return (
    show && (
      <div className={styles.BulkAction}>
        <p>Bulk Action:</p>
        <div className={styles.Actions}>
          <Button className={styles.BtnDone} value="Done" />
          <Button btnType="danger" value="Remove" />
        </div>
      </div>
    )
  );
};

export default BulkAction;
