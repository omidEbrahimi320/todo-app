function FilterTodo(props) {
    let filterTodo = (e) => props.getBtnFilter(e.target.textContent)

    return (
        <div className="filter-todo  flex justify-evenly xs:w-5/6 xs:mb-4 sm:w-4/6 md:w-[45%] lg:w-[37%]
                        xl:w-[25%]">
            <div 
                className="all flex justify-center items-center border rounded py-2 w-[30%] cursor-pointer 
                           xs:text-xs lg:text-sm"
                onClick={filterTodo}>

                <span>All</span>
                <div className="bg-slate-300 flex justify-center items-center w-5 h-5 rounded-full 
                                text-[11px] ml-[5px]">{props.todos.length}</div>
            </div>
            <div 
                className="done flex justify-center items-center border rounded py-2 w-[30%] cursor-pointer 
                           xs:text-xs lg:text-sm"
                onClick={filterTodo}>

                <span>Done</span>
                <div className="bg-green-300 flex justify-center items-center w-5 h-5 rounded-full 
                                text-[11px] ml-[5px]">{props.todos.filter(item => item.isTodoDone === true).length}</div>
            </div>
            <div 
                className="undone flex justify-center items-center border rounded py-2 w-[30%] cursor-pointer 
                           xs:text-xs lg:text-sm"
                onClick={filterTodo}>

                <span>Undone</span>
                <div className="bg-red-300 flex justify-center items-center w-5 h-5 rounded-full 
                                text-[11px] ml-[5px]">{props.todos.filter(item => item.isTodoDone === false).length}</div>
            </div>
        </div>
    )
}

export default FilterTodo