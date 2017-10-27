import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteTodo } from '../actions'
import { allowDrop, drag, drop } from '../helpers/dragndrop'
import { byOrder } from '../helpers/sorting'

const TodoList = ({ todos, filter, name, dispatch}) => {

    todos = todos.filter(e=>{
        return e.progress === filter
    })

    todos.sort(byOrder)

    return <div id={`column-${filter}`} className="column" onDrop={drop(filter, dispatch)} onDragOver={allowDrop}>
                <h3 className="column-name">{name}</h3>
                {todos.map(todo => (
                    
                        <div key={todo.id} draggable="true" onDragStart={drag(JSON.stringify(todo))} className={"card "+todo.cardType}>
                            <Link to={`/details/${todo.id}`}>
                                <b>{'#'+todo.id+' '+todo.name}</b>
                            </Link>
                            <span onClick={e=>{
                                dispatch(deleteTodo(todo.id))
                            }}>delete</span>
                        </div>
                ))}
            </div>
}

let Content = ({todos, dispatch}) => {
    return <div className="flex-content">
            <TodoList dispatch={dispatch} name="ToDo" todos={todos} filter="todo"/>
            <TodoList dispatch={dispatch} name="In Progress" todos={todos} filter="inprogress"/>
            <TodoList dispatch={dispatch} name="Done" todos={todos} filter="done"/>
        </div>
}


const mapStateToProps = state => {
    return {
        todos: state
    }
}

Content = connect(mapStateToProps)(Content)

export default Content