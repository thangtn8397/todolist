import clsx from "clsx";
import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  const { inputType, label, className, ...otherProps } = props;
  let elementInput = null;
  switch (inputType) {
    case "text": {
      elementInput = <input className={styles.ElementInput} {...otherProps} />;
      break;
    }
    case "textarea": {
      elementInput = (
        <textarea className={styles.ElementInput} {...otherProps} />
      );
      break;
    }
    default:
      elementInput = <input className={styles.ElementInput} {...otherProps} />;
  }
  return (
    <div className={clsx(styles.Input, className)}>
      {label && <label className={styles.Label}>{label}</label>}
      {elementInput}
    </div>
  );
};

export default Input;
