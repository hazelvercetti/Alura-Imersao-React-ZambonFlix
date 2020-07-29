import React from 'react';
import FormBaseElement from '../formBase';

function FormTextArea({ label, name, inputClassName, size, value, onChange }) {
  return (
    <FormBaseElement label={label} name={name} size={size}>
      <textarea className={`form-control ${inputClassName || ''}`} name={ name } onChange={ onChange } defaultValue={ value }></textarea>
    </FormBaseElement>
  );
}

export default FormTextArea;
