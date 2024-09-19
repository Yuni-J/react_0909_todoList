import React from 'react';
import Form from 'react-bootstrap/Form';
import './Todo.css'
import checkImage from '../img/check.png';
import circleImage from '../img/circle.png';

const Todo = ({ todo, onRemove, onToggle }) => {
    return (
        <div className='todo'>
            <div className="mb-3">
                <div className='todotextToggle' 
                onClick={() => onToggle(todo.id)}>
                   {todo.checked ? <img src={checkImage} /> : <img src={circleImage} />}
                </div>
                <div className='text'
                style={{
                    textDecorationLine: todo.checked ? 'line-through' : 'none',
                    color: todo.checked ? "#ccc" : "#000"
                }}>{todo.todotext}</div>
            </div>           
            <button onClick={()=>onRemove(todo.id)}>x</button>
        </div>
    );
};

export default Todo;

