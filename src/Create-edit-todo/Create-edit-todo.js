import { useState } from "react";

function CreateTodo(props) {
    let [state, setState] = useState('');

    let inputValue = (event) => {
        setState({todoName: event.target.value})
    }

    let addTodo = () => {
        props.getTodoName(state.todoName);
        setState({todoName : ''});
    }

    
    
    
    return (
        <div className="search-bar flex justify-center border  rounded  xs:w-[93%] xs:mr-0 
                        sm:w-[85%] md:w-4/6 lg:w-[45%] xl:w-[35%]">
            <input 
            type="text" 
            className="search-box py-2 px-3 text-sm rounded-s placeholder:text-sm focus:outline-none 
                       xs:w-10/12 sm:w-11/12 xl:py-[10px]"
            placeholder="write your todo name"
            onChange={inputValue}
            value={state.todoName || ''}/>

            <i 
            className="pi pi-plus bg-white rounded-e flex justify-center items-center cursor-pointer
                       xs:w-2/12 sm:pr-2 sm:w-1/12 "
            onClick={addTodo}
            ></i>
        </div>
    );
}

export default CreateTodo;