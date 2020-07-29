import React from 'react';
import FormBaseElement from '../formBase';

function FormInput({ label, name, inputClassName, type, size, value, onChange }) {
  return (
    <FormBaseElement label={label} name={name} size={size}>
      <input type={type || "text"} className={`form-control ${inputClassName || ''}`} name={ name } onChange={ onChange } defaultValue={ value } />
    </FormBaseElement>
  );
}

export default FormInput;
