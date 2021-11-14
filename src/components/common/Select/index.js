import React from "react";
import styles from "./Select.module.css";

const Select = ({ options, label, onChange, defaultValue, ...otherProps }) => {
  return (
    <div>
      <label className={styles.Label}>{label}</label>
      <select className={styles.Select} onChange={onChange} {...otherProps}>
        {options?.map((option) => (
          <option key={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};
export default Select;
