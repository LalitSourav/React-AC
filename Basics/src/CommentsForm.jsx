import React, { useState } from 'react'

const CommentsForm = ({addNewComment}) => {
    let [formData, setFormData] = useState({
        userName:"",
        reMark:"",
        rating:""
    });

let handelInputChange = (event) =>{
    setFormData((currVal) => {
        return {...currVal,[event.target.name]: event.target.value}
    })
}

let handelSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
    addNewComment(formData)
    setFormData(
        {
        userName:"",
        reMark:"",
        rating:""
        }
    )
}

  return (
    <div>
      <h4>Give Your Comment:</h4>
      <form onSubmit={handelSubmit}>
        <input 
            type="text" 
            placeholder='username' 
            name='userName'
            onChange={handelInputChange}
            value={formData.userName}
        />

        <br /> <br /> <br />

        <textarea 
            placeholder='remarks'
            name="reMark" 
            id="" 
            onChange={handelInputChange}
            value={formData.reMark}
        >  
        </textarea>

        <br /> <br /> <br />

        <input 
            type="number" 
            name="rating" 
            placeholder='rating' 
            min={1} 
            max={5} 
            onChange={handelInputChange}
            value={formData.rating}
        />
        
        <br /> <br /> <br />

        <button>Add Comment</button>
      </form>
    </div>
  )
}

export default CommentsForm
