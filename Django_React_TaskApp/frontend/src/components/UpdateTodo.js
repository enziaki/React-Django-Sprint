import React, { useState } from "react";
import axios from "axios";
import './CSS/UpdateTodo.css'

function UpdateTodo({ todo }) {
    const [task, setNewTask] = useState(todo.task);
    const [description, setNewDescription] = useState(todo.description);

    const handleUpdate = async (event) => {
        event.preventDefault();

        const updatedData = {
            task: task,
            description: description,
            completed: todo.completed
        };

        axios.post(`http://localhost:8000/api/todoupdate/${todo.id}`, updatedData)
            .then(response => {
                alert(`Post Updated with ID: ${response.data.id}`);
            })
            .catch(error => {
                console.error('Error creating a post:', error);
            });

    };

    return (
        <div className="UpdateForm">
            <form onSubmit={handleUpdate}>
                <input type="text" value={task} onChange={(e) => setNewTask(e.target.value)} placeholder="Title" />
                <textarea value={description} onChange={(e) => setNewDescription(e.target.value)} placeholder="Description" />
                <button type="submit">Edit Todo</button>
            </form>

        </div>
    );

}

export default UpdateTodo;