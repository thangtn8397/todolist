import React from "react";
import styles from "./FormContainer.module.css";

const FormContainer = ({ children, title }) => {
  return (
    <div className={styles.FormContainer}>
      <h3 className={styles.Title}>{title}</h3>
      {children}
    </div>
  );
};

export default FormContainer;
