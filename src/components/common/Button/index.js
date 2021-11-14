import React from "react";
import styles from "./Button.module.css";

const Button = ({ btnType, clicked, value, className, ...otherProps }) => {
  let btnStyle = [styles.Button, className];
  let style = styles.Button;
  if (btnType === "success") {
    btnStyle.push(styles.Success);
  } else if (btnType === "danger") {
    btnStyle.push(styles.Danger);
  }
  style = btnStyle.join(" ");

  return (
    <div className={styles.BtnContainer}>
      <button onClick={clicked} className={style} {...otherProps}>
        {value}
      </button>
    </div>
  );
};

export default Button;
