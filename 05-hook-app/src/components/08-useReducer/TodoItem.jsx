import React from 'react';

export default function TodoItem({ todo, onDeleteTodo, onToggleTodo }) {
  console.log(todo);

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${
          todo.done ? 'text-decoration-line-through' : ''
        }`}
        onClick={() => onToggleTodo(todo.id)}
        aria-label="span"
      >
        {todo?.description}{' '}
      </span>
      <button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>
        Borrar
      </button>
    </li>
  );
}
