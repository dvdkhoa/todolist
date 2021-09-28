import React from 'react'
import Todo from './Todo'


export default function TodoList({todoList,checkClick}) {
    return (
       <>
        {
            todoList.map( todo => <Todo key={todo.key} todo={todo} checkClick={checkClick}/>)
        }
       </>
    )
}
