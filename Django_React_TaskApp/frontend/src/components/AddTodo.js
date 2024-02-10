import React, { useState } from 'react';
import axios from 'axios';
import './CSS/AddTodo.css'

function AddTodo() {
    const [newTask, setNewTask] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const newData = {
        "task": newTask,
        "description": newDescription,
        "completed": false
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        axios.post('http://localhost:8000/api/todocreate/', newData)
            .then(response => {
                alert(`New Post Created with ID: ${response.data.id}`);
            })
            .catch(error => {
                console.error('Error creating a post:', error);
            });
        setNewDescription('');
        setNewTask('');
    };

    return (
        < div className='add-todo-form'>
            <form onSubmit={handleSubmit}>
                <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Title" />
                <textarea value={newDescription} onChange={(e) => setNewDescription(e.target.value)} placeholder="Description"></textarea>
                <button type="submit">Create Todo</button>
            </form>
        </div>
    );
}

export default AddTodo;
