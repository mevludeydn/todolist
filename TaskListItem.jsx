import React from 'react'

function TaskListItem({item, editTask, removeTask}) {
  return (
    <div>
       <li className='list-group-item' 
    key={item.uuid}>
        {item.priority && <span className='badge text-bg-secondary me-2'>Öncelikli</span>}
        {item.task}
        <div className='btn-group float-end' role="group">
          
        <btn onClick={()=>editTask(item.uuid)} 
        className='btn btn-sm btn-info float-end'>Güncelle</btn>
            
            <btn onClick={()=>removeTask(item.uuid)} 
        className='btn btn-sm btn-danger float-end'>Sil</btn>
        
        </div>
        
        
        </li>
    </div>
  )
}

export default TaskListItem
