import React , {useState} from 'react'

const ToDoList = () => {
    const [tasks,setTasks] = useState([]);
    const [newTask , setNewTask] = useState("");
    function handleInputChange(e){
        setNewTask(e.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t=>[...t,newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_,i) => i!=index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index>0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
         }
    }
    function moveTaskDown(index){
        if(index<tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
         }
    }
  return (
    <div className='to-do-list'>
        <h2>To Do List</h2>

        <ol>
            {tasks.map((task,index)=>
            <li key={index}>
                <span>{task}</span>
                <button onClick={()=>{deleteTask(index)}} className='delete-btn'>Delete</button>
                <button onClick={()=>{moveTaskUp(index)}} className='move-btn'>Move Up</button>
                <button onClick={()=>{moveTaskDown(index)}} className='move-btn'>Move Down</button>
            </li>
            )}
        </ol>

        <div className='add'>
            <input 
            type="text" 
            placeholder='Enter a task...' 
            value={newTask} 
            onChange={handleInputChange}/>

            <button onClick={addTask}>
                Add a Task
            </button>
        </div>

    </div>
  )
}

export default ToDoList