import { title } from "process";
import { useState } from "react";

function TodoForm() {
    const [todo,setTodo] = useState({title:'',status:false})

    const handleChange = (e) =>{
        setTodo({...todo,[e.target.name]:e.target.value})
    }
    const handleClick = (e) =>{
        e.preventDefault();
        console.log('click..')
    }
   

  return (
    <form onClick={handleClick}>
      <input type="text" placeholder="Add a new todo" name='title' value={todo.title}  onChange={handleChange}/>
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
