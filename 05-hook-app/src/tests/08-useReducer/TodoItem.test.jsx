import { fireEvent, render, screen } from '@testing-library/react';
import TodoItem from '../../components/08-useReducer/TodoItem';

describe('Pruebas en <TodoItem/>', () => {
  const todo = {
    id: 1,
    description: 'Piedra del Alma',
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());
  test('should show the pending Todo to complete', () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );
    const liElement = screen.getByRole('listitem');
    expect(liElement.className).toBe(
      'list-group-item d-flex justify-content-between'
    );
    //   const spanElement = screen.getByRole('span');
    const spanElement2 = screen.getByLabelText('span');
    expect(spanElement2.className).toContain('align-self-center');
    expect(spanElement2.className).not.toContain(
      'text-decoration-line-through'
    );
    // screen.debug() si no estamos seguros que contiene un elemento
  });
  test('should show Todo complete', () => {
    todo.done = true;
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );
    //   const spanElement = screen.getByRole('span');
    const spanElement2 = screen.getByLabelText('span');
    expect(spanElement2.className).toContain('text-decoration-line-through');
    // screen.debug() si no estamos seguros que contiene un elemento
  });
  test('should make the ToggleTodo when user make Click', () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );
    const spanElement = screen.getByLabelText('span');
    fireEvent.click(spanElement);
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });
  test('should call the onDeleteTodo', () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );
    const buttonElement = screen.getByText('Borrar');
    fireEvent.click(buttonElement);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
