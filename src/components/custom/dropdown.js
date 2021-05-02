import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

function Dropdown(props) {
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    props.setSelected(event.target.value);
  };

  return (
    <FormControl style={{ minWidth: "100%"}}>
      <InputLabel id="dd-select-label">{props.title}</InputLabel>
      <Select
        labelId="dd-select-label"
        id="dd-select"
        value={selectedValue}
        onChange={handleChange}
      >
        {
          props.items.map((name, index) => (
            <MenuItem key={index} value={name}>{name}</MenuItem>
          ))
        }
      </Select>
    </FormControl>
  );
}

export default Dropdown;
