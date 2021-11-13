import clsx from "clsx";
import React from "react";
import styles from "./FormContainer.module.css";

const FormContainer = ({ children, title, className }) => {
  return (
    <div className={clsx(styles.FormContainer, className)}>
      <h3 className={styles.Title}>{title}</h3>
      {children}
    </div>
  );
};

export default FormContainer;
