import React from "react";
import { Dropdown as BootstrapDropdown } from "react-bootstrap";

function Dropdown(props) {
  return (
    <BootstrapDropdown>
      <BootstrapDropdown.Toggle
        variant="info"
        id="dropdown"
        style={{ minWidth: "100px" }}
      >
        <span>{props.title}</span>
      </BootstrapDropdown.Toggle>

      <BootstrapDropdown.Menu>
        {props.items.map((name, index) => (
          <BootstrapDropdown.Item
            key={index}
            onClick={(event) => {
              props.setSelected(event.target.text);
            }}
            value={name}
          >
            {name}
          </BootstrapDropdown.Item>
        ))}
      </BootstrapDropdown.Menu>
    </BootstrapDropdown>
  );
}

export default Dropdown;
