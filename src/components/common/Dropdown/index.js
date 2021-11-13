import React, { useState } from "react";
import styles from "./Dropdown.module.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const Dropdown = ({ label }) => {
  const [priority, setPriority] = useState(priorityArray[0]);
  const [showPopup, setShowPopup] = useState(false);
  let popupStyleArray = !showPopup
    ? [styles.Popup, styles.Hidden]
    : [styles.Popup];
  let popupStyle = popupStyleArray.join(" ");

  const onClickItem = (priority) => {
    setPriority(priority);
    setShowPopup(false);
  };

  return (
    <div className={styles.DropdownContainer}>
      <label className={styles.Label}>Priority</label>
      <div className={styles.Dropdown} onClick={() => setShowPopup(!showPopup)}>
        <div>{priority.label}</div>
        {!showPopup ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
      </div>
      <ul className={popupStyle}>
        {priorityArray.map((p) => (
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
  );
};

export default Dropdown;

const priorityArray = [
  { value: "normal", label: "Normal" },
  { value: "high", label: "High" },
  { value: "low", label: "Low" },
];
