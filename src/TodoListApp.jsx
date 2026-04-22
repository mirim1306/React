import {useState} from 'react';
import './todolist.css'
// import TodoItemEmpty from './components/TodoItemEmpty.jsx'
// import Button from './components/Button.jsx'
// import Checkbox from './components/Checkbox.jsx'
import TodoHeader from './components/TodoHeader.jsx'
import TodoAdder from './components/TodoAdder.jsx'
// import TodoItem from './components/TodoItem.jsx'
import TodoList from './components/TodoList.jsx'

class Todo{
    constructor(text){
        this.id=Date.now();
        this.text=text;
        this.isCompleted=false;
    }
}

function TodoListApp() {
    const [todos, setTodos]=useState([]);
    function addTodo(text){
        setTodos((todos)=>[...todos, new Todo(text)]);
    }
    // function addTodo(text){
    //     setTodos((todos)=>[...todos, new Todo(text)]);
    // }
    return (
        <div className="todo">
            <TodoHeader/>
            <TodoAdder addTodo={addTodo}/>
            <TodoList todos={todos}/>
        </div>
    )
}
export default TodoListApp;