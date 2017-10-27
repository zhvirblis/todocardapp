import json from '../todos.json'

let nextTodoId = json.todos.length;
export const addTodo = (name, cardType, progress, details) => {
    return {
        type: 'ADD_TODO',
        order: nextTodoId,
        id: nextTodoId++,
        cardType,
        details,
        progress,
        name
    }
}

export const editTodo = (id, name, cardType, progress, details, order) => {
    return {
        type: 'EDIT_TODO',
        name,
        details,
        order,
        cardType,
        progress,
        id
    }
}

export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        id
    }
}