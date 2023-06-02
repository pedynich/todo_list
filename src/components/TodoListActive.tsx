import TodoItem from './TodoItem';
import { useAppSelector } from '../hook';
import AllToggle from './AllToggle';

const TodoListActive: React.FC = () => {
  const todos = useAppSelector(state => state.todos.list);
  const todosCompleted = todos.filter(todo => todo.completed === false);

  return (
    <section className='main'>
      <AllToggle />
      <ul className='todo-list'>
        {todosCompleted.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoListActive;