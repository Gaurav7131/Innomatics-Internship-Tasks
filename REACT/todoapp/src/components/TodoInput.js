import React ,{ useState } from 'react'

const TodoInput = (props) => {
    {/* create state for storing and displaying text*/}

const[inputText,setInputText] = useState('');
const handleEnterPress =(e)=>{
  if(e.keyCode===13){
    props.addList(inputText)
    setInputText("")
  }
}

  return (
    <div className="input-container">
      {/* for creating input box */}
        <input type="text" className= 'input-box-todo' placeholder='Enter ur Task' value= {inputText} onChange={e=> {
            setInputText(e.target.value)//target
        }}
        onKeyDown={handleEnterPress}
        />

        {/* for adding Add button*/}
         
         <button className='add-btn' onClick={()=>{
            props.addList(inputText)
            setInputText(" ") // for setting blank input box
         }}>+</button>
    </div>
  )
}

export default TodoInput