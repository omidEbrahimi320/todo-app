import { Component } from 'react';
import './App.css';
import CreateEditTodo from './Create-edit-todo/Create-edit-todo.js';
import Todos from './Todos/Todos';
import FilterTodo from './Filter-todo/Filter-todo';

class App extends Component {

  state = {
    todos : [],
    statusTodo : null
  }

  addTodo (todoName) {
    if (todoName !== '' && todoName !== undefined) {
      this.setState(prevState => {
        return {
          todos : [
            {id: Date.now(), todoName , isTodoDone : false},
            ...prevState.todos,
          ]
        }
      })
    } else {
      console.log('please fill in the field');
    }
    
  }

  deleteTodo (todoId) {
    this.setState(prevState => {
      return {
        todos : prevState.todos.filter(todo => todo.id !== todoId)
      }
    })
  }

  toggleDoneUndon (todoId) {
    this.setState(prev => ({
      todos: prev.todos.map(item => item.id === todoId ? {...item, isTodoDone: !item.isTodoDone} : item)
    }))
  }

  clickFilter (btnFilter) {
    if (btnFilter === 'Done') this.setState({ statusTodo : true })
    else if (btnFilter === 'Undone') this.setState({ statusTodo : false })
    else if (btnFilter === 'All') this.setState({ statusTodo : null })
  }

  editTodo (todoId, editedName) {
    this.setState(prev => ({
      todos: prev.todos.map(item => item.id === todoId ? {...item, todoName : editedName} : item)
    }))
  }
  
  render () {
    let { todos, statusTodo } = this.state;
    let filterTodos;

    statusTodo === null ? filterTodos = todos.filter(item => statusTodo !== item.isTodoDone)
    : filterTodos = todos.filter(item => statusTodo === item.isTodoDone)

    return (
        <div className="App flex justify-center items-center flex-col">
          <div className="create-todo-and-categories w-full flex justify-center mt-32 xs:flex-col-reverse 
                          xs:items-center">
            <CreateEditTodo getTodoName={this.addTodo.bind(this)}/>
            <FilterTodo getBtnFilter={this.clickFilter.bind(this)} todos={todos}/>
          </div>
          <div className="todos w-full flex flex-col items-center mt-7">
            {
              filterTodos.length === 0 
                ? <p>there isn't any todo</p> 
                : filterTodos.map(todo => {
                  
                  return <Todos 
                            item={todo} 
                            key={todo.id}
                            toggleDoneUndon={this.toggleDoneUndon.bind(this)}
                            deleteTodo={this.deleteTodo.bind(this)}
                            getEditedTodo={this.editTodo.bind(this)}
                          />
                })
              }
          </div>
        </div>
    );
  }
}

export default App;