import React, { useState } from "react";
import styles from "./Dropdown.module.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import clsx from "clsx";

const Dropdown = ({ label = "Priority", priorityArray, className }) => {
  const [priority, setPriority] = useState(priorityArray[0]);
  const [showPopup, setShowPopup] = useState(false);

  const onClickItem = (priority) => {
    setPriority(priority);
    setShowPopup(false);
  };

  return (
    <div className={clsx(styles.DropdownContainer, className)}>
      <label className={styles.Label}>{label}</label>
      <div className={styles.Dropdown} onClick={() => setShowPopup(!showPopup)}>
        <input readOnly value={priority.label} />
        {!showPopup ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
      </div>
      <div
        className={
          !showPopup ? clsx(styles.PopupContainer, styles.Hidden) : styles.Popup
        }
      >
        <ul className={styles.Popup}>
          {priorityArray?.map((p) => (
            <li
              onClick={() => onClickItem(p)}
              key={p.value}
              className={p.value === priority.value ? styles.Selected : ""}
            >
              {p.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
