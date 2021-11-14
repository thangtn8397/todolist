import React, { useState } from "react";
import styles from "./Dropdown.module.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import clsx from "clsx";

const Dropdown = ({
  label = "Priority",
  array,
  className,
  onChange,
  value,
}) => {
  const [item, setItem] = useState(value ? value : array[0]);
  const [showPopup, setShowPopup] = useState(false);

  const onClickItem = (item) => {
    setItem(item);
    onChange(item);
    setShowPopup(false);
  };

  return (
    <div className={clsx(styles.DropdownContainer, className)}>
      <label className={styles.Label}>{label}</label>
      <div className={styles.Dropdown} onClick={() => setShowPopup(!showPopup)}>
        <input readOnly value={item} />
        {!showPopup ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
      </div>
      <div
        className={
          !showPopup ? clsx(styles.PopupContainer, styles.Hidden) : styles.Popup
        }
      >
        <ul className={styles.Popup}>
          {array?.map((i) => (
            <li
              onClick={() => onClickItem(i)}
              key={i}
              className={i === item ? styles.Selected : ""}
            >
              {i}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
