import React, { useState } from 'react'
import "./App.css"
import TodoInput from './components/TodoInput'
import Todolist from './components/TodoList';
function App(){

  {/*  creating list for "it means who store or add task in list or entered task" */}
  const [listTodo,setListTodo]= useState([]);
   {/* for sending data from child @TodoInput to parent @App.js*/}
   let addList = (inputText) =>{
    //TO avoid creating untitle  or empty tasks 
    if(inputText!==' ')
     {/* use ... it means first add all existing data into later add new one in thhe array or list*/}
    setListTodo([...listTodo,inputText]);
   }

  // Create a function for delete functionality 

  const deleteListItem = (key) =>{
    let newListTodo = [...listTodo] // for stroring existing data so that we create a newlistodo variable
    newListTodo.splice(key,1)// how much items that we need to remove so just assign 1 as a default
    // Need to update todolist

    setListTodo([...newListTodo])
  }
  
  return (
   <div className="main-container">
    <div className="center-container">
    <TodoInput addList={addList}/> {/* passed addlist function anad addLIst property*/}
    {/* to show the list */}
    <h1 className="app-heading"> TODO</h1>
    <hr/>
    {listTodo.map((listItem,i)=>{ // index as  a i
      return ( 
        <Todolist  key={i} index={i} item={listItem} deleteItem={deleteListItem}/> // Assign unique key and deletelistitem passed as a function
      )
    })}
    {/*<Todolist />  << for showing items i.e tasks*/} 
    </div>
   </div>
  )
}

export default App