import { useTodo } from '../../hooks/useTodo';
import TodoList from './TodoList';

export default function TodoApp() {
  const {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    TODO_COUNT,
    TODO_PENDING,
  } = useTodo();

  return (
    <>
      <h1>
        TodoApp: ({TODO_COUNT}), <small>PENDIENTES: {TODO_PENDING}</small>
      </h1>
      <hr />

      <TodoList
        todos={todos}
        onNewTodo={handleNewTodo}
        onDeleteTodo={handleDeleteTodo}
        onToggleTodo={handleToggleTodo}
      />
    </>
  );
}
