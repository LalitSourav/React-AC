import React, { useState } from 'react'

const FormTwo = () => {
   let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: ""
   })

let handelInputChange = (event) => {
    // let fieldName = event.target.name;
    // let newValue = event.target.value;
    setFormData(
        (currData) => {
            // currData[fieldName] = newValue;
            // return {...currData, [fieldName]: newValue}
            return {...currData, [event.target.name]: event.target.value}
        }
    )
}

let handelSubmit = (event) => {
    event.preventDefault();
    setFormData({
        fullName: "",
        userName: "",
        password: ""
    })
    console.log(formData);
}

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <label htmlFor="fullname">Enter Your Name : </label> 
        <input 
            type="text" 
            placeholder='Enter your name' 
            value={formData.fullName} 
            onChange={handelInputChange}
            name="fullName" //should be same as the object key name  
            id='fullname'
        />

        <br /><br /><br />

        <label htmlFor="username">Enter Your UserName : </label>
        <input type="text" 
            placeholder='Enter your username' 
            value={formData.userName} 
            onChange={handelInputChange} 
            name="userName"
            id='username'
        />

        <br /><br />

        <label htmlFor="password">Enter Your Password : </label>
        <input type="password" 
            placeholder='Enter your password' 
            value={formData.password} 
            onChange={handelInputChange} 
            name="password"
            id='password'
        />

        <br /><br />


        <button>Submit</button>
      </form>
    </div>
  )
}

export default FormTwo
