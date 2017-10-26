import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
    let name
    let datails
    let cardType
    let progress

    let onSubmit = e => {
        e.preventDefault()
        if(!name.value.trim()){
             return
        }
        if(!cardType.value.trim()){
            return
        }
        if(!progress.value.trim()){
            return
        }
        dispatch(addTodo(name.value, cardType.value, progress.value, datails.value))
        name.value = datails.value = ''
        cardType.value = 'task'
        progress.value = 'todo'
    }

    return (
        <div className="add-todo">
            <form className="form-todo" onSubmit={onSubmit}>
                <p><input ref={node => {
                    name = node
                }} placeholder="name"/></p>
                <p>
                    <select ref={node => {
                            cardType = node
                        }}>
                        <option value="task">Task</option>
                        <option value="bug">Bug</option>                
                    </select>
                </p>
                <p>
                    <select ref={node => {
                            progress = node
                        }}>
                        <option value="todo">ToDo</option>
                        <option value="inprogress">In Progress</option>
                        <option value="done">Done</option>                                        
                    </select>
                </p>
                <p><textarea ref={node => {
                            datails = node
                        }} placeholder="details"/></p>
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
}

AddTodo = connect()(AddTodo)

export default AddTodo