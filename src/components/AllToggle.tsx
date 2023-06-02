import { useAppDispatch, useAppSelector } from '../hook';
import { allComplete } from '../store/todoSlice';

const AllToggle: React.FC = () => {
    const todos = useAppSelector(state => state.todos.list);
    const dispatch = useAppDispatch();

    const todoCompleted = todos.map(todo => todo.completed).includes(false)

    return (
        <div>
            <input id="toggle-all" className="toggle-all" type="checkbox"
                onChange={() => dispatch(allComplete(todoCompleted))}
            ></input>
            <label htmlFor="toggle-all">Mark all as complete</label>
        </div>
    );
};

export default AllToggle;