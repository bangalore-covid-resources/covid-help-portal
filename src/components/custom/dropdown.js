import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

function Dropdown(props) {
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    props.setSelected(event.target.text);
  };

  return (
    // <BootstrapDropdown>
    //   <BootstrapDropdown.Toggle
    //     variant="info"
    //     id="dropdown"
    //     style={{ minWidth: "100px" }}
    //   >
    //     <span>{props.title}</span>
    //   </BootstrapDropdown.Toggle>

    //   <BootstrapDropdown.Menu>
    //     {props.items.map((name, index) => (
    //       <BootstrapDropdown.Item
    //         key={index}
    //         onClick={(event) => {
    //           props.setSelected(event.target.text);
    //         }}
    //         value={name}
    //       >
    //         {name}
    //       </BootstrapDropdown.Item>
    //     ))}
    //   </BootstrapDropdown.Menu>
    // </BootstrapDropdown>
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
