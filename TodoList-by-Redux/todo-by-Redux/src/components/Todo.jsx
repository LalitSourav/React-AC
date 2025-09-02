import { useSelector } from "react-redux"
import AddForm from "./AddForm";
const Todo = () => {
    const todos = useSelector((state) => state.todos);
  return (
    <div>
        <AddForm></AddForm>
      <h2>Todo List App</h2>
      <ul>
        {todos.map((todo) => {
            <li key={todo.id}>{todo.task}</li>
        })}
      </ul>
    </div>
  )
}

export default Todo
