import React from 'react';

function FormBaseElement({ label, name, size, children }) {
  return (
    <div className={`form-group ${size ? `col-${size}` : 'col'}`}>
        {label ? <label htmlFor={ name }>{ label }:</label> : <></>}
        { children }
    </div>
  );
}

export default FormBaseElement;
