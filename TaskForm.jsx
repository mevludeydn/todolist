import React, { useState } from 'react'
import TaskList from './TaskList'
import { v4 as uuidv4 } from 'uuid';

function TaskForm() {
      const emptyForm = {task:"", priority:false}
      const [formData, setFormData]=useState(emptyForm)
      const [tasks, setTasks]=useState([])

      function removeTask(uuid){
        console.log(uuid);
        setTasks(prev=>prev.filter(item=>item.uuid!==uuid))
      }

      function editTask(uuid){
        console.log(uuid);
        const task=tasks.find(item=>item.uuid==uuid)
        console.log(task);
        setFormData({...task, isEdited:true})
       
      }

function handleInputChange(event){

    setFormData(prev=>{
        return{
            ...prev,
            [event.target.name]: event.target.type=="checkbox"?
            event.target.checked:event.target.value
        }
    })
}
    function handleFormSubmit(event) {
      event.preventDefault  ()
      if (formData.isEdited){
        const taskIndex = tasks.findIndex (item=>item.uuid===formData.uuid)
        const newTasks=tasks.slice()
        newTasks[taskIndex]={...formData}
        setTasks(newTasks)
      }
      else if (formData.task.length>3)

      if(formData.task.length>3){
        formData.uuid=uuidv4()
        setTasks(
            prev=>
            [formData,...prev,]
        )
      
        

      }
      setFormData(emptyForm)
      event.target.reset()
    }

  return (
    <div className='container'>
        <TaskList tasks={tasks} removeTask={removeTask} editTask={editTask}/>
      
      
      <form onSubmit={handleFormSubmit}>
  <div className="row mb-3">
  <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Task</label>
    
  <div className="col-sm-10">
      <input 
      onChange={handleInputChange}
      type="checkbox"
      checked={formData.priority}
      value={formData.task}
      className="form-control" 
      id="inputEmail3" 
      name="task"/>
    </div>
    
  </div>
 
  
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        <input 
        onChange={handleInputChange}
        className="form-check-input" 
        type="checkbox" 
        id="priority" 
        name="priority"/>

        <label className="form-check-label" htmlFor="priority">
          Öncelikli
        </label>
      </div>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Sign in</button>
</form>




    </div>
  )
}

export default TaskForm
