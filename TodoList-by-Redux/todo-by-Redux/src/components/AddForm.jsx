import React, { useState } from 'react'


const AddForm = () => {
    const [task,setTask] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
    }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={(event) => setTask(event.target.value)  }/>
        <button>Add Task</button>
      </form>
    </div>
  )
}

export default AddForm
