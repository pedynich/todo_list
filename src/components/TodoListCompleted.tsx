import TodoItem from './TodoItem';
import { useAppSelector } from '../hook';
import AllToggle from './AllToggle';

const TodoListCompleted: React.FC = () => {
    const todos = useAppSelector(state => state.todos.list);
    const todosCompleted =  todos.filter(todo => todo.completed === true);

  return (
    <section className='main'>
      <AllToggle/>
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

export default TodoListCompleted;