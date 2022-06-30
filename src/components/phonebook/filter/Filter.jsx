import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styled from './Filter.module.css';

function Filter({ value, onChange }) {
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

const mapStateToProps = state => ({
  value: state.phonebook.filter,
});
const mapDispatchToProps = dispatch => ({
  onChange: () => dispatch(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
