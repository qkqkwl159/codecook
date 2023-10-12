
import React, {useRef, useState} from 'react';
import './Todo.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function Todo() {
    const no = useRef(1)
    const [todo, setTodo] = useState([])

    const onDel = (id)=>{
        setTodo(todo.filter(todo => todo.id !== id))
    }

    const onToggle= (id)=>{
        setTodo(todo.map(item=> item.id ===id? {...item, check : !item.check } : item))
    }

    const onAdd = (text)=>{
        setTodo([
            ...todo,
            {
                id : no.current++,
                text,
                check: false}
            ])
    }

    return (

        <div className='Todos'>
            <h1>TO_DO__</h1>
            <TodoForm onAdd={onAdd}/>
            <TodoList todo={todo} onToggle={onToggle} onDel={onDel}/>
            
        </div>
    );
}

export default Todo;
