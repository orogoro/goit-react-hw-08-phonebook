import React from 'react';

import styled from './Filter.module.css';

export default function Filter({ value, onChange }) {
  return (
    <label className={styled.lableFilter}>
      Find contacts by name
      <input
        className={styled.filterValue}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
