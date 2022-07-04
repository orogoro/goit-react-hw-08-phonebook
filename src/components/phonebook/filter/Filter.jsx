import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/phonebook/actions';
import { getFilter } from 'redux/phonebook/selectors';

import styled from './Filter.module.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={styled.lableFilter}>
      Find contacts by name
      <input
        className={styled.filterValue}
        type="text"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </label>
  );
}
