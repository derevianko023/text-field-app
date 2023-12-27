// styles
import styles from "./App.module.scss";
//widgets
import { TextField } from "../widgets/ui/TextField/TextField";
//react
import React, { useState } from 'react';


export const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className={styles.container}>
      <TextField
        label="Outlined"
        value={inputValue}
        onChange={handleInputChange}
        className={styles.textField}
      />
    </div>
  );
}


