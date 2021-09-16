import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function SearchBar(props) {
const [value, setValue] = React.useState(null);
const {options} = props

  return (
    <Autocomplete
      id="searchBar"
      options={options}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(e) => setinputValue(event.target.value)}
      open={inputValue.length > 2}
      renderInput={(params) => <TextField {...params} label="Search Friend" variant="outlined" />}
    />
  );
}