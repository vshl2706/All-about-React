import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer
/*
- Now we are creating slice (a type of reducers)
- Reducers are a combination of properties and functions
- filter hamesha true value return karta hai
- addTodo ke andar (state, action) syntax hai
- action ke thorugh ham values ko access kar paate hai 
- state se state pass krte hain
- stores ko reducers ki information chaiye thi
- Dispatch ek reducer ko use karte hue store ke andar values me changes krta hai
*/