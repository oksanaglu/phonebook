import * as React from 'react';
import { TextField } from '@mui/material';
import { Label } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filter } from 'redux/contacts/filterSlice';
import { getFilter } from 'redux/contacts/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(getFilter);

  const handleInput = evt => {
    dispatch(filter(evt.currentTarget.value.trim()));
  };

  return (
    <Label>
      <TextField
        variant="standard"
        label="Find contacts by name"
        size="small"
        value={filterName}
        onChange={handleInput}
      />
    </Label>
  );
};

export default Filter;
