import { useState } from 'react';
import EditTodo from './../Edit-todo/EditTodo';

function Todos({ item, toggleDoneUndon, clickToDoneOrUnDone, deleteTodo, getEditedTodo }) {
  const [edit, setEdit] = useState(false)

  let editTodo = text => {
    getEditedTodo(item.id, text)
    setEdit(false)
  }

  return (
    !edit 
      ? <div key={item.id} 
             className={`todo flex justify-between  px-3 py-2 rounded mt-2 
                         ${item.isTodoDone ? 'bg-green-300' : 'bg-red-300'} xs:w-[73%] md:w-3/6 lg:w-[38%]
                         xl:w-[28%]`}>
          <div className='flex items-center'>
            <input 
                  type="checkbox" 
                  onClick={() => toggleDoneUndon(item.id)}
                  defaultChecked={item.isTodoDone ? true : false}
            />
            <span className='todoName ml-3' onClick={() => clickToDoneOrUnDone(item.id)}>{item.todoName}</span>
          </div>
          <div className="edit-and-delete flex items-center">
            <i className="pi pi-trash mr-4 cursor-pointer" onClick={() => deleteTodo(item.id)}></i>
            <i className="pi pi-file-edit cursor-pointer" onClick={() => setEdit(true)}></i>
          </div>
        </div>
      : <EditTodo todo={item} clickToEdit={editTodo}/>
  )
}

export default Todos;