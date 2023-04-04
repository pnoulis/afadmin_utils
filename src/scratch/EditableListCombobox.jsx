import * as React from "react";
import styled, { css } from "styled-components";
import { EditableListCombobox } from "/src/comboboxes/index.js";

const indicators = css`
  ${({ selected, active }) => {
    if (selected) {
      return `
        background-color: pink;
      `;
    } else if (active) {
      return `
        background-color: green;
      `;
    } else {
      return `
        &:hover {
          background-color: yellow;
        }
        &:focus {
          background-color: red;
        }
      `;
    }
  }}

  &:active {
    background-color: blue;
  }
`;

const Combobox = EditableListCombobox.Provider;

const StyleTrigger = styled(EditableListCombobox.Trigger)`
  ${indicators}
  border: 2px solid black;
`;

const StyleListbox = styled(EditableListCombobox.Listbox)`
  border: 2px solid black;
  margin-top: 5px;
`;

const StyleOption = styled(EditableListCombobox.Option)`
  ${indicators}
`;

const options = ["one", "two", "three"];
function ComboboxWrapper() {
  return (
    <div>
      <h1 id="countries-label">EditableList combobox</h1>
      <div>
        <Combobox
          name="countries"
          labelledBy="countries-label"
          options={options}
          onSelect={(label) => alert(label)}
        >
          <StyleTrigger placeholder="select country" />
          <StyleListbox renderOption={(props) => <StyleOption {...props} />} />
        </Combobox>
      </div>
    </div>
  );
}

export default ComboboxWrapper;
