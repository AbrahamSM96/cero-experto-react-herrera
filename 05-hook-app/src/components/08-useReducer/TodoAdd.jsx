import React from 'react';
import { useForm } from '../../hooks/useForm';
export default function TodoAdd({ onNewTodo }) {
  const { description, handleInputChange, onResetForm } = useForm({
    description: '',
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.length <= 1) return;
    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description,
    };
    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <div className="col-5">
      <h4>Agregar TODO</h4>
      <hr />
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="¿Qué hay que hacer?"
          className="form-control"
          name="description"
          value={description}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-outline-primary mt-1">
          Agregar
        </button>
      </form>
    </div>
  );
}
