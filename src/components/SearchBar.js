import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

export default function SearchBar(props) {
const [value, setValue] = useState(null);
const [inputValue, setinputValue] = useState("");

const {options, getOptions} = props


useEffect(() => {
    if (inputValue.length > 2) {
        getOptions(inputValue) 
    }
      },[inputValue, getOptions])


  return (
    <Autocomplete
      id="searchBar"
      options={options}
      getOptionLabel={(option) => option.name
    }
      getOptionSelected={(option, value) => option.id === value.id}
      style={{ width: 300 }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, value) => {
        setinputValue(value)
      }
    }
      open={inputValue.length > 2 && !value}
      renderInput={(params) => <TextField {...params} label="Search Friend" variant="outlined" 
                                            InputProps={{
                                            ...params.InputProps,
                                            startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon />
                                            </InputAdornment>
                                            ),
                                            }}
                                            />}
    />
  );
}