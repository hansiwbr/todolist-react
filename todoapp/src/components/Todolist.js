import React from 'react'
import Todo from './Todo'
const todos = [
    {"description":"Einkaufen","done":true},
    {"description":"Sport","done":false},
    {"description":"Programieren","done":false}
  ]


export const Todolist = () => {
  return (
    <div>
        <h1>Todolist</h1>
        {todos.map((item,index) => {
            return (<Todo 
                description={item.description}
                done={item.done}
                key={index}
                ></Todo>
                );
        })}
    
    </div>
  )
}
