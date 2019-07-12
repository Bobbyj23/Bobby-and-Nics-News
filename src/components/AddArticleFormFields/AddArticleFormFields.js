import React from 'react';
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

function AddAricleFormFields({keysForJSON}) {

  const capitalize = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  return (
    keysForJSON.map((key) => {
      let placeholderText = `Input Article ${capitalize(key)}`;
      return (
      <FormGroup controlId={key} key={key}>
        <ControlLabel>{capitalize(key)}</ControlLabel>
            <FormControl type="text" placeholder={placeholderText} />
      </FormGroup>
      )
    })
    )

}

export default AddAricleFormFields;