import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type Todo = {
    id: string,
    title: string,
    completed: boolean
}

type TodoEdit = {
    id: string,
    title: string
}

type TodosState = {
    list: Todo[]
}

const initialState: TodosState = {
    list: [],
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>) {
            state.list.push({
                id: new Date().toISOString(),
                title: action.payload,
                completed: false,
            });
        },
        toggleComplete(state, action: PayloadAction<string>) {
            const toggledTodo = state.list.find(todo => todo.id === action.payload);
            if (toggledTodo) {

                toggledTodo.completed = !toggledTodo.completed;
            }
        },
        editTodo(state, action: PayloadAction<TodoEdit>) {
            const editTodo = state.list.find(todo => todo.id === action.payload.id);
            if (editTodo) {
                editTodo.title = action.payload.title
            }
        },
        removeTodo(state, action: PayloadAction<string>) {
            state.list = state.list.filter(todo => todo.id !== action.payload);
        },
        removeTodoCompleted(state) {
            state.list = state.list.filter(todo => todo.completed === false);
        },
        allComplete(state, action: PayloadAction<boolean>) {
            state.list = state.list.map((todo) => {
                return {
                    id: todo.id,
                    completed: action.payload,
                    title: todo.title
                }
            })
        }
    },
});

export const { addTodo, toggleComplete, removeTodo, allComplete, editTodo, removeTodoCompleted } = todoSlice.actions;

export default todoSlice.reducer;