import clsx from "clsx";
import React from "react";
import { searchTask } from "../../state/actions";
import { useAppState } from "../../state/AppStateContext";
import { Input } from "../common";
import styles from "./SearchBar.module.css";

const SearchBar = ({ className }) => {
  const { dispatch } = useAppState();

  return (
    <Input
      placeholder="Search..."
      onChange={(e) =>
        dispatch(searchTask(e.target.value.toLowerCase().trim()))
      }
      className={clsx(styles.SearchBar, className)}
    />
  );
};

export default SearchBar;
