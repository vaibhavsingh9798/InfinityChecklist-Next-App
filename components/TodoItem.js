

const TodoItem = ({todo}) => {
 console.log('item..',todo)
    const handleClick = (e)=>{
         e.preventDefault();
         console.log('click')
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