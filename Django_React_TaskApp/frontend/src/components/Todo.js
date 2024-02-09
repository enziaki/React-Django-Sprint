import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateTodo from './UpdateTodo';

function Todo({ todo }) {

    const [isComplete, setIsComplete] = useState(todo.completed);
    const [isExpanded, setIsExpanded] = useState(false);
    const updatedData = {
        "id": todo.id,
        "task": todo.task,
        "description": todo.description,
        "completed": !todo.completed
    }

    const handleCompletion = () => {
        axios.put(`http://localhost:8000/api/todoupdate/${todo.id}`, updatedData)
            .then((response) => {
                setIsComplete(!isComplete);
            })
            .catch((error) => {
                return <h1>Had an error while updating </h1>
            })
    }

    const handleDeletion = () => {
        axios.delete(`http://localhost:8000/api/tododelete/${todo.id}`)
            .then(response => {
                alert(`Post deleted`);
            }).catch(error => { console.log("Error while deleting: " + error) })
    }

    return (
        <div className="todo">
            <h2 style={{ textDecoration: isComplete ? 'line-through' : 'none' }} onClick={() => setIsExpanded(!isExpanded)}>{todo.task}</h2>
            <input
                type="checkbox"
                checked={isComplete} // Use local state
                onChange={() => {
                    setIsComplete(!isComplete); // Update local state
                    handleCompletion(); // Call API
                }}
            />
            {isExpanded && (
                <div className="expanded-content">
                    <p1>{todo.description}</p1>
                    <br />
                    <UpdateTodo todo={todo} />
                    <button onClick={handleDeletion}>Delete Todo</button>
                </div>
            )}
        </div>
    );
}

export default Todo;
