import React, { use, useState } from 'react'
import { checkTicket, generateTicket } from './helper';

const Lottery = () => {
    let [ticket, setTicket] = useState([0,0,0]);
    let isWinning = checkTicket(ticket);

    
    

    function generateNewTicket(){
      setTicket( generateTicket(3)) 

      
    }
    
   
  

   

  return (
    <div>
      <h2>Lottery Game</h2>
      <hr />
      <h4>Lottery Ticket = {ticket} </h4>
      <p>{isWinning == 15 ? "Congrates you won":"Better luck next time" }</p>
      <br />
      <button onClick={
        generateNewTicket
       
      }>Get New Ticket</button>
     
    </div>
  )
}

export default Lottery
 