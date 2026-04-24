import {useState, useEffect} from 'react';
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

const TODOS_STORAGE_KEY = "todos";

function TodoListApp() {
    function initTodos(){
        const savedTodos = localStorage.getItem(TODOS_STORAGE_KEY);
        return savedTodos ? JSON.parse(savedTodos) : [];
    }
    const [todos, setTodos]=useState(initTodos); // 할일 목록 저장 state, 기본값: 빈 리스트

    // todos 변경될 때, 저장하자. useEffect(명령어, [변할값])
    useEffect(()=>{
        // localStorage에 todos 저당하자
        localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
    }, [todos])

    function addTodo(text){
        setTodos((todos)=>[...todos, new Todo(text)]);
    }
    // function addTodo(text){
    //     setTodos((todos)=>[...todos, new Todo(text)]);
    // }
    function toggleTodo(id){
        // todos에서 하나씩 꺼내어 todo의 id가 id와 같으면, !이전 isCompleted
        setTodos((todos)=>
            todos.map((todo)=>
                todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo
            )
        )
    }
    function deleteTodo(id){
        // todos에서 하나씩 꺼내어 todo의 id가 다른 todo만 남기자
        setTodos((todos)=>
            todos.filter((todo) => todo.id !== id)
        )
    }
    function editTodo(id, newText){
        // todos에서 하나씩 꺼내어 todo. id가 같으면 text를 newText로 대입하자
        setTodos((todos)=>
            todos.map((todo)=>
                todo.id === id ? {...todo, text: newText} : todo
            )
        )
    }
    return (
        <div className="todo">
            <TodoHeader/>
            <TodoAdder addTodo={addTodo}/>
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo}/>
        </div>
    )
}
export default TodoListApp;