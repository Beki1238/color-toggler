import React, { useState } from 'react'
import "../style.css"
const Todo = () => {
    const [todos , setTodo] = useState([]);

    const [input, setInput] = useState('');

const handleSubmit =()=>{
    if(input.trim()==='')return;

setTodo((todos) =>{
   return todos.concat({
        text:input,
        id: Math.random().toString(36).substr(2, 9),
    });
});
    setInput("");

};
const removetodo = id =>
    setTodo((todos) => todos.filter((t)=>t.id !== id));
  return (
    <div className='container'>

        <input type='text' 
        placeholder='enter new todo' 
        value={input } 
        onChange={(e)=>setInput(e.target.value)}/>

<button onClick={handleSubmit}>submit</button>

<ul className="todo-list">
    {todos.map(({text,id})=>(
        <li className="todo" key={id}>
            <span>{text}</span>
            <button className='close' onClick={()=>removetodo(id)}>X</button>
        </li>

    ))}
  
</ul>
        </div>
  )
}

export default Todo