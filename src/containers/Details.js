import React from 'react'
import { connect } from 'react-redux'
import { editTodo } from '../actions'
import { Link } from 'react-router-dom'

let Details = ({match, dispatch, todos}) => {
   
    let todo = todos.find((element) => {
        return element.id == match.params.number
    })
    
    if(todo){
        let name
        let datails
        let cardType
        let progress
        let onSubmitEdit = e => {
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
            console.log(`${name.value} ${progress.value} ${cardType.value} ${datails.value}`)
            dispatch(editTodo(todo.id, name.value, cardType.value, progress.value, datails.value))
            window.history.back();
        }
        return (
            <div className="center-content">
                <Link to="/">Home</Link> / Details
                <h2>Edit Card</h2>
                <div className="edit-todo">
                    <form className="form-todo" onSubmit={onSubmitEdit}>
                        <p><input ref={node => {
                            if(node) {
                                node.value = todo.name
                                name = node
                            }
                        }} placeholder="name"/></p>
                        <p>
                            <select ref={node => {
                                if(node) {
                                    node.value = todo.cardType
                                    cardType = node
                                }
                                }}>
                                <option value="task">Task</option>
                                <option value="bug">Bug</option>                
                            </select>
                        </p>
                        <p>
                            <select ref={node => {
                                if(node) {
                                    node.value = todo.progress
                                    progress = node
                                }
                                }}>
                                <option value="todo">ToDo</option>
                                <option value="inprogress">In Progress</option>
                                <option value="done">Done</option>                                        
                            </select>
                        </p>
                        <p><textarea ref={node => {
                                if(node) {
                                    console.log('-- ToDo')
                                    node.value = todo.details
                                    datails = node
                                }
                                }} placeholder="details"/></p>
                        <button type="submit">
                            Edit Todo
                        </button>
                    </form>
                </div>
            </div>
        )
    }
    return (
        <div className="center-content">
            <Link to="/">Home</Link> / Details
            <h2>Card Not Found</h2>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        todos: state
    }
}

Details = connect(mapStateToProps)(Details)

export default Details