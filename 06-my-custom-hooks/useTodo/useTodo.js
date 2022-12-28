import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

export const useTodo = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  };
  const initialState = [];

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);
  const TODO_COUNT = todos.length;
  const TODO_PENDING = todos.filter((todo) => !todo.done).length;

  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: id,
    });
    console.log(id);
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    TODO_COUNT,
    TODO_PENDING,
  };
};
