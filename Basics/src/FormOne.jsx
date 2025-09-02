import React, { useState } from 'react'

const FormOne = () => {
    let [name, setName] = useState("");
    let [userName, setUserName] = useState("");

    //emiti kisa sabu inputs lagi state variable declare kariba na !
    //emiti hele bht problem haba to sei lagi better way hela ki !
    //gute state object baneiba aau seita re sabu alga alga inputs aau value rakhiba !
    //aau handelChange naam ra gute function rakhiba sei sabu changes handel kariba alga alga name lagi user lagi darkar nhi !

    let changeName = (event) =>{
        setName(event.target.value);
    }

    let changeUserName = (event) =>{
        setUserName(event.target.value);
    }

  return (
    <div>
      <form>
        <label htmlFor="fullname">Enter Your Name : </label>
        <input type="text" placeholder='Enter your name' value={name} onChange={changeName} id='fullname'/>

        <br /><br /><br />

        <label htmlFor="username">Enter Your UserName : </label>
        <input type="text" placeholder='Enter your username' value={userName} onChange={changeUserName} id='username'/>

        <br /><br />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default FormOne
