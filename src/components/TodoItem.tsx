import { toggleComplete, removeTodo, editTodo } from '../store/todoSlice';
import { useAppDispatch } from '../hook';
import { useEffect, useRef, useState } from 'react';

interface TodoItemProps {
  id: string,
  title: string,
  completed: boolean
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();
  const [edit, setEdit] = useState('')
  const [value, setValue] = useState(title)

  const inputReference = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputReference.current != null) {
      inputReference.current.focus();
    }
  }, [edit]);

  let className: string = '';

  if (completed) {
    className = 'completed'
  }

  const currentClick = () => {
    setEdit('editing ');
  }

  const handleAction = (key: string) => {
    if (key === 'blur' || key === 'Enter') {
      handleActionEdit()
    }
    else {
      handleActionEsc()
    }
  }

  const handleActionEdit = () => {
    const editableTodo = {
      id,
      title: value
    }
    if (value.trim().length) {
      dispatch(editTodo(editableTodo));
    }
    else {
      dispatch(removeTodo(id))
    }
    setEdit('');
  }

  const handleActionEsc = () => {
    setValue(title);
    setEdit('');
  }

  return (
    <li
      onDoubleClick={currentClick}
      className={`${edit} ${className}`}
    >
      <div className='view'>
        <input
          className='toggle'
          type='checkbox'
          checked={completed}
          onChange={() => dispatch(toggleComplete(id))}
        />
        <label>{title}</label>
        <button className='destroy' onClick={() => dispatch(removeTodo(id))}></button>
      </div>
      <input
        className='edit'
        ref={inputReference}
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") { handleAction(event.key) }
          if (event.key === "Escape") { handleAction(event.key) }
        }
        }
        onBlurCapture={(event) => { handleAction(event.type) }}
      />
    </li>
  );
};

export default TodoItem;