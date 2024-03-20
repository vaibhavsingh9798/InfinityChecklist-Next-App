import { title } from "process";
import { useState } from "react";

function TodoForm() {
    const [todo,setTodo] = useState({title:'',status:false})

    const handleChange = (e) =>{
        setTodo({...todo,[e.target.name]:e.target.value})
    }
    const handleClick = async (e) =>{
        e.preventDefault();
        let response = await fetch('http://localhost:3000/api/todo',{
            method:'POST',
            body: JSON.stringify(todo),
            headers:{'Content-Type' : 'application.json'}
        })
    }
   

  return (
    <form onClick={handleClick}>
      <input type="text" placeholder="Add a new todo" name='title' value={todo.title}  onChange={handleChange}/>
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
