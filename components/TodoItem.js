

const TodoItem = ({todo}) => {
 console.log('item..',todo)
    const handleClick = async (e)=>{
         e.preventDefault();
         let response =  await fetch(`http://localhost:3000/api/todo/${todo._id}`,{
            method:'PUT',
            body : JSON.stringify({...todo,status:true}),
            headers: {'Content-Type' : 'application/json'}
         })
    }
    return(
        <>
        <h2>Pending Todo</h2>
       {!todo.status && <input type='checkbox' onClick={handleClick}/> }
        {!todo.status && todo.title}
        <h2>Completed Todo</h2>
        {todo.status && todo.title}
        </>
    )
}

export default TodoItem;