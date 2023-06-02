import TodoItem from "../TodoItem";
import * as reduxHooks from '../../hook';
import * as actions from '../../store/todoSlice';
import { fireEvent, render, screen } from "@testing-library/react";

jest.mock('react-redux')

const mockedDispatch = jest.spyOn(reduxHooks, 'useAppDispatch');

describe('TodoItem', () => {
    it('should create TodoItem', () => {
        mockedDispatch.mockReturnValue(jest.fn());

        const view = render(
            < TodoItem id="123" title="Redux" completed={false} />
        );

        expect(view).toMatchSnapshot();
        
    });

    it('should dispatch actions', () => {
        const dispatch = jest.fn();
        mockedDispatch.mockReturnValue(dispatch);

        const mockedToggleComplete = jest.spyOn(actions, 'toggleComplete')
        const mockedRemoveTodo = jest.spyOn(actions, 'removeTodo')

        render(
            < TodoItem id="123" title="Redux" completed={false} />
        );

        fireEvent.click(screen.getByRole('checkbox'));

        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(mockedToggleComplete).toHaveBeenCalledWith('123');

        fireEvent.click(screen.getByRole('button'));

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(mockedRemoveTodo).toHaveBeenCalledWith('123');
    });
})