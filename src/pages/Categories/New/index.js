import React, { useState } from 'react';
import PageTemplate from '../../../components/PageTemplate';
import FormInput from '../../../components/Form/Input';
import FormTextArea from '../../../components/Form/TextArea';

const Category = {
  name: '',
  color: '',
  description: '',
}

function NewCategory() {
  const [list, setList] = useState([]);
  
  const [values, setValues] = useState(Category);

  function setValue(key, value) {
    console.log(values);

    setValues({
      ...values,
      [key]: value
    })
  }

  function handleChange(evt) {
    setValues(evt.target.getAttribute('name'), evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    if (values) { //} && categorias.indexOf(nome) < 0) {
      setList([ ...list, values ]);

      setValues(Category);
    }
  }

  return (
    <PageTemplate>
      
      <form onSubmit={(evt) => { handleSubmit(evt); }}>        
        <div className="card border-secondary mb-3">
          <div className="card-header">
            <h5 className="card-title mb-0">Cadastro da categoria</h5>
          </div>
          <div className="card-body">
            <div className="form-row">
              <FormInput label="Nome da categoria" name="name" onChange={handleChange} value={values.name} />

              <FormInput label="Cor" name="color" type="color" inputClassName="p-0" size="1" onChange={handleChange} value={values.color} />
            </div>

            <div className="form-row">
              <FormTextArea label="Descrição da categoria" name="color" onChange={handleChange} value={values.color} />
            </div>

            <div className="form-row">
              <div className="col text-right">
                <button className="btn btn-primary">Cadastrar</button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <ul>
        {list.map((category, index) => {
          return (
            <li key={index}>
              {category.name} #{category.color} - {category.description}
            </li>
          );
        })}
      </ul>

    </PageTemplate>
  );
}

export default NewCategory;
