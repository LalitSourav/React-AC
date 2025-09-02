import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{id: "", task: "", isDone: false}],
};

export const todoSlice = createSlice({
    name: "todo", //same name as the feature
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo ={
                id:nanoid(),
                task: action.payload,
                isDone: false
            }
            state.todos.push(newTodo);// direct mutation of (this can't be done react we need to destructure it to do so...)
        },
        deleteTodo: (state, action) => {
            //action.playload
           state.todos = state.todos.filter((todo) => todo.id != action.payload)
        },
        markAsDone: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if(todo.id === action.payload){
                    todo.isDone = true;
                }
            })
        }
    }
})

export const {addTodo, deleteTodo, markAsDone} = todoSlice.actions;
export default todoSlice.reducer;