import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import CreateTodo from './CreateTodo';
import Todo from './Todo';
import './Todo.css';

const TodoList = () => {
    const nextId = useRef(1);

    const [ todos, setTodos] = useState([ ]);

    const [ inputs, setInputs ] = useState({ todotext: '' })

    //구조 분해 할당
    const { todotext } = inputs;

    const onChange = (e)=>{
        const { name, value } = e.target;

        setInputs({
            ...inputs,
            [name]: value
        })
        console.log(inputs)
    }

    const onCreate = ()=>{
        console.log(todos);
        const todo = {
            id: nextId.current,
            todotext
        }
        
        //현재 todos에 todo추가
        setTodos(todos.concat(todo));
        
        //기존 inputs창 초기화
        setInputs({
            todotext: ''
        })
        
        nextId.current += 1;
    };

    const onRemove = (id)=>{
        setTodos(todos.filter(t=> t.id !==id));
    }

    const onToggle = (id)=>{
        setTodos(todos.map(t=>
            t.id === id ? {...t, checked: !t.checked} : t
        ))
    }

    return (
        <div className='todoList'>
            <CreateTodo todotext={todotext} onChange={onChange} onCreate={onCreate}/>
            {
                todos.map(t=>(
                    <Todo todo={t} key={t.id} onRemove={onRemove} onToggle={onToggle} onChange={onChange} />
                ))
            }
        </div>
    );
};

export default TodoList;
