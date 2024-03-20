import TodoItem from "./TodoItem";


const TodoList = ({todos})=>{
    console.log('list...',todos)
    return(
        <div>
        {
          todos.map((todo) =>{
            <div key={todo._id} className=" font-extrabold text-3xl text-slate-900">
               <h3>{todo.title}</h3>
            </div>
          })
        }
        </div>
    )
}

export default TodoList;