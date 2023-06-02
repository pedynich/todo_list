import TodoList from "../TodoList";
import * as reduxHooks from '../../hook';
import { render } from "@testing-library/react";

jest.mock('react-redux')

const todos = [
    { id: '123', title: 'React', completed: false},
    { id: '124', title: 'Redux', completed: false}
];

describe('TodoList', () => {
    it('should create TodoList with empty todos', () => {
        jest.spyOn(reduxHooks, 'useAppSelector').mockReturnValue([])
        const view = render(<TodoList/>);

        expect(view).toMatchSnapshot();
    });

    it('should create TodoList with  todos items', () => {
        const dispatch = jest.fn()
        jest.spyOn(reduxHooks, 'useAppSelector').mockReturnValue(todos)
        jest.spyOn(reduxHooks, 'useAppDispatch').mockReturnValue(dispatch)
        const view = render(<TodoList/>);

        expect(view).toMatchSnapshot();
    })
})