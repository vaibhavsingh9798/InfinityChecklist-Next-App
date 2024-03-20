import TodoList from '@/components/TodoList';

async function fetchTodo(){
    try{
    let data = await fetch('http://localhost:3000/api/todo')
    let todoList = await data.json() 
     return todoList
    }catch(err){
        console.log('something wrong with fetch data',err)
    }
}

export default  async function Todo(){

    // const todos = await fetchTodo() || []
    const todos = [{_id:1,title:'math',status:false},{_id:2,title:'scinece',status:false}]
    return(
        <TodoList todos={todos} />
       
      
    )
}
