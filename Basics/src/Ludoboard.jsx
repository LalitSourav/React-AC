import React, { useState } from 'react'

const Ludoboard = () => {
    let [moves, setMoves] = useState({red:0, blue:0, yellow:0, green:0 })
    
  return (
    <div>
      <p>Game Begins!</p>
       <p>Red moves ={moves.red} </p>
       <button onClick={() => {
            setMoves({ ...moves, red: moves.red + 1 })
       }}>+1</button>
       {/* using callback  */}
       <p>Blue moves ={moves.blue} </p> 
       <button onClick={() => {
            setMoves((prevMoves) => {
                return{...prevMoves, blue: prevMoves.blue +1}
            })
       }}>+1</button>
       <p>Yellow moves ={moves.yellow} </p>
       <button>+1</button>
       <p>Green moves ={moves.green} </p>
       <button>+1</button>
    </div>
  )
}

export default Ludoboard
