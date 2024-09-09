import React from 'react';
import './Todo.css'

const CreateTodo = ({ todotext, onChange, onCreate }) => {
    return (
        <div className='createTodo'>
            <h1>TODO List</h1>
            <div className='content'>
                <input 
                    type="text"
                    name='todotext'
                    placeholder='해야 할 일'
                    value={todotext}
                    onChange={onChange}
                />
                <button onClick={onCreate}>+</button>
            </div>
        </div>
    );
};

export default CreateTodo;
