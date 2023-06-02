import TodoItem from './TodoItem';
import { useAppSelector } from '../hook';
import AllToggle from './AllToggle';

const TodoList: React.FC = () => {
  const todos = useAppSelector(state => state.todos.list);

  return (
    <section className='main'>
      <AllToggle />
      <ul className='todo-list'>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;