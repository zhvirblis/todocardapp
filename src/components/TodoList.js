import React from 'react'
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

    export default TodoList