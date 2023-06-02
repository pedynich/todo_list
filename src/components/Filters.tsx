import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hook";
import { removeTodoCompleted } from "../store/todoSlice";

const Filters: React.FC = () => {
    const dispatch = useAppDispatch();
    const todos = useAppSelector(state => state.todos.list);
    const todosActive = todos.filter(todo => todo.completed === false);
    const todosCompleted = todos.filter(todo => todo.completed === true);
    const count = todosActive.length

    return (
        <footer className="footer" data-reactid=".0.2">
            <span className="todo-count">
                <strong>{count}</strong>
                <span>{` item${todosActive.length === 1 ? '' : 's'}`}</span>
                <span > left</span>
            </span>
            <ul className="filters" >
                <li >
                    <NavLink to='/' className={({ isActive }) =>
                        isActive ? "selected" : ""
                    }>All</NavLink>
                </li>
                <span >
                </span>
                <li >
                    <NavLink to='active' className={({ isActive }) =>
                        isActive ? "selected" : ""
                    } >Active</NavLink>
                </li>
                <span > </span>
                <li >
                    <NavLink to='completed' className={({ isActive }) =>
                        isActive ? "selected" : ""
                    } >Completed</NavLink>
                </li>
            </ul>
            {todosCompleted.length ? <button className="clear-completed" onClick={() => dispatch(removeTodoCompleted())}>Clear completed</ button> : ''}
        </footer>
    )
};

export default Filters;