import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  const { inputType, label, ...otherProps } = props;
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
    <div className={styles.Input}>
      <label className={styles.Label}>{label}</label>
      {elementInput}
    </div>
  );
};

export default Input;
