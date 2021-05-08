import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Filter.module.css';

const Filter = ({ onChangeFilter, filter }) => {
  const idForFilterLabel = uuidv4();

  return (
    <>
      <label htmlFor={idForFilterLabel} className={styles.Label}>
        Find contacts by name
      </label>
      <input
        onChange={onChangeFilter}
        type="text"
        name="filter"
        value={filter}
        id={idForFilterLabel}
        className={styles.Input}
      />
    </>
  );
};

export default Filter;
