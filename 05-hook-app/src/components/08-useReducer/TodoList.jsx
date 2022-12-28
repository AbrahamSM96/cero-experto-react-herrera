import React from 'react';
import TodoAdd from './TodoAdd';
import TodoItem from './TodoItem';

export default function TodoList({
  todos,
  onNewTodo,
  onDeleteTodo,
  onToggleTodo,
}) {
  return (
    <div className="row">
      <div className="col-7">
        <ul className="list-group">
          {todos.map((todo, index) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDeleteTodo={onDeleteTodo}
              onToggleTodo={onToggleTodo}
            />
          ))}
        </ul>
      </div>
      <TodoAdd onNewTodo={onNewTodo} />
    </div>
  );
}
