import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Todo from './Todo';
import { useQuery } from 'react-query';

const FetchAllTodos = () => {
    const [todos, setTodos] = useState([]);

    const {
        data: apiData,
        isLoading,
        isError,
    } = useQuery(["todo"], () => {
        return Axios.get("http://localhost:8000/api/todo").then((res) => res.data)
    });

    if (isError) {
        return <h1> Caught an error in Backend</h1>
    }

    if (isLoading) {
        return <h1>Loading.... BACKEND</h1>
    }

    return (
        <div className='TodoCard'>
            <h1>
                {apiData?.map((todo) => (
                    <Todo key={todo.id} todo={todo} />
                ))}
            </h1>
        </div>
    );
}

export default FetchAllTodos;