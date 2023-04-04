import * as React from "react";
import styled, { css } from "styled-components";
import { EditableCombobox } from "/src/comboboxes/index.js";

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

const Combobox = EditableCombobox.Provider;

const StyleTrigger = styled(EditableCombobox.Trigger)`
  ${indicators}
  border: 2px solid black;
`;

const StyleListbox = styled(EditableCombobox.Listbox)`
  border: 2px solid black;
  margin-top: 5px;
`;

const StyleOption = styled(EditableCombobox.Option)`
  ${indicators}
`;

const options = ["one", "two", "three"];
function ComboboxWrapper() {
  return (
    <div>
      <h1 id="countries-label">Editable combobox</h1>
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
