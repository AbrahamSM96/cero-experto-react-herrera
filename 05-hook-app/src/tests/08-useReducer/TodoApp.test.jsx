import { render, screen } from '@testing-library/react';
import TodoApp from '../../components/08-useReducer/TodoApp';
import { useTodo } from '../../hooks/useTodo';

jest.mock('../../hooks/useTodo');

describe('Test <TodoApp>', () => {
  test('should show the component correctly', () => {
    useTodo.mockReturnValue({
      todos: [
        {
          id: 1,
          description: 'Todo #1',
          done: true,
        },
        {
          id: 2,
          description: 'Todo #2',
          done: false,
        },
        {
          id: 3,
          description: 'Todo #3',
          done: false,
        },
      ],
      handleNewTodo: jest.fn(),
      handleDeleteTodo: jest.fn(),
      handleToggleTodo: jest.fn(),
      TODO_COUNT: 3,
      TODO_PENDING: 1,
    });
    render(<TodoApp />);
    expect(screen.getByText('Todo #1')).toBeTruthy();
    expect(screen.getByText('Todo #2')).toBeTruthy();
    expect(screen.getByRole('textbox')).toBeTruthy();
    console.log(screen.getByRole('textbox').className, 'formcontrol');
  });
});
