import React from 'react'

const TodoList = (props) => {
  return (
    <li className="list-item">
        {props.item}
        
        <span className='icons'>
        <i className="fa-solid fa-trash icon-delete"onClick={e=>{
            props.deleteItem(props.index) // if we use key then error will occur
        }}></i>
        </span>
    </li>
  )
}

export default TodoList