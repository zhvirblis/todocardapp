import React from 'react'
import TodoList from './TodoList'

let Content = ({todos, dispatch}) => {
    return <div className="flex-content">
            <TodoList dispatch={dispatch} name="ToDo" todos={todos} filter="todo"/>
            <TodoList dispatch={dispatch} name="In Progress" todos={todos} filter="inprogress"/>
            <TodoList dispatch={dispatch} name="Done" todos={todos} filter="done"/>
        </div>
}

export default Content