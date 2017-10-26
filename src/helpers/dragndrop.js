import { editTodo } from '../actions'

export function allowDrop(ev) {
    ev.preventDefault()
}

export let drag = (todo) => {
    return ev => {
        ev.dataTransfer.setData("text", todo)
    }
}

export let drop = (filter, dispatch) => {
    return ev => {
        ev.preventDefault()
        let todo = ev.dataTransfer.getData("text")
        todo = JSON.parse(todo)
        dispatch(editTodo(todo.id, todo.name, todo.cardType, filter, todo.details))
    }
}