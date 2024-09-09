import React from 'react';
import Form from 'react-bootstrap/Form';
import './Todo.css'

const Todo = ({ todo, onRemove, onToggle }) => {
    return (
        <div className='todo'>
            <h3>
                <div className="mb-3">
                    <Form.Check  
                        label={todo.todotext} 
                        checked={todo.active}
                        onClick={()=> onToggle(todo.id)}  
                        style={{
                            textDecorationLine: todo.active == true ? 'line-through' : 'none'
                        }}
                    />
                </div>           
                <button onClick={()=>onRemove(todo.id)}>x</button>
            </h3>
        </div>
    );
};

export default Todo;
