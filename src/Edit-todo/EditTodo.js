import { useState } from "react";

function EditTodo({ todo, clickToEdit }) {
    let [text, setText] = useState(todo.todoName)

    let inputValue = e => {
        setText(e.target.value)
        
    }

    return (
        <div key={todo.id} className={`todo flex justify-between  px-3 py-2 rounded mt-2 
                                        ${todo.isTodoDone ? 'bg-green-300' : 'bg-red-300'} xs:w-[73%] md:w-3/6 lg:w-[38%]
                                        xl:w-[28%]`}>
          <input type="text" onChange={inputValue} value={text} autoFocus
                 className="focus:outline-none px-2 rounded"/>
          <div className="edit-and-delete flex items-center">
            <i className="pi pi-file-edit cursor-pointer" onClick={() => clickToEdit(text)}></i>
          </div>
        </div>
    )
}

export default EditTodo;