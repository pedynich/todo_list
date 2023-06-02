import { useState } from 'react';
import { addTodo } from './store/todoSlice';
import NewTodoForm from './components/NewTodoForm';
import { useAppDispatch, useAppSelector } from './hook';
import Filters from './components/Filters';
import { Outlet } from 'react-router-dom';


function App() {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();
  const todos = useAppSelector(state => state.todos.list);


  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTodo(text));
      setText('');
    }
  }

  return (
    <div className='todoapp'>
      <NewTodoForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
      {todos.length ?
        <div>
          <Outlet />
          <Filters />
        </div> : ''}

    </div>
  );
}

export default App;