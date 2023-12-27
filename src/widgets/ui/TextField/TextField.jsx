// react
import React, { useState } from "react";
// libs
import classnames from "classnames";
// styles
import styles from "./TextField.module.scss";

export const TextField = ({ label, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!value) {
      setIsFocused(false);
    }
  };

  return (
    <div className={styles.inputContainer}>
      <label
        htmlFor="customInput"
        className={classnames(styles.label, {
          [styles.labelFocused]: isFocused,
        })}
      >
        {label}
      </label>
      <input
        id="customInput"
        type="text"
        className={`${styles.input}`}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};
