import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
    let [todos, setTodos] = useState([]);
    let [newTask, setNewTask] = useState("");

    function addTodo() {
        setTodos( 
            [...todos, {task:newTask, id:uuidv4(), isDone:false }]       
        )
        setNewTask("")
      }
    function updateTask(event) {
      setNewTask(event.target.value)
    }  

    function deleteTask(id){
      setTodos(todos.filter((todo) =>  todo.id != id));
    }
    function markAsDone(id){
      setTodos(
      todos.map((todo) => {
        
          if(todo.id === id){
            return{
              ...todo,
              isDone: !todo.isDone 
            }          
        }
        else{
          return todo;
        }  
      }))
    }


    
  return (
    <div>
      <input 
            type="text" 
            placeholder='add a task' 
            value={newTask} 
            onChange={(event) => {
              updateTask(event)
            }}/>
      &nbsp;     
      <button onClick={addTodo}>add</button>
       <hr /> 
       <h3>Tasks to do !!</h3>

       <br /> 
       <br />
       <br />
       <ul>
        {
           todos.map((todo) => ( 
            <li key={todo.id} >
            <span style={todo.isDone ? {textDecorationLine: "line-through"}: {}}>
              {todo.task}
            </span>
              
              &nbsp;
              &nbsp;
              <button onClick={() => {deleteTask(todo.id)}}>Delete</button>
              &nbsp;
              &nbsp;
              <button onClick={() => {markAsDone(todo.id)}}>{todo.isDone ? "Undo" : "Done" }</button>
           
            </li>     
           ))
        }
       </ul>

    </div>
  )
}

export default TodoList
