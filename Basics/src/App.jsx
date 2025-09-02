import { useState } from 'react'
import Ludoboard from './Ludoboard'
import TodoList from './TodoList'
import Lottery from './Lottery'
import FormOne from './FormOne'
import FormTwo from './FormTwo'
import Comment from './Comment'
import CommentsForm from './CommentsForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{textAlign: "center"}}>
    {/* <Ludoboard></Ludoboard>  */}
    {/* <TodoList></TodoList> */}
    {/* <Lottery></Lottery> */}
    {/* <FormOne></FormOne> */}
    {/* <FormTwo></FormTwo> */}
    <Comment></Comment>
    {/* <CommentsForm></CommentsForm> */}

    </div>
  )
}

export default App
