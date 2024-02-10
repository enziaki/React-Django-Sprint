import React from 'react'
import FetchAllTodos from './components/FetchAllTodos'
import AddTodo from './components/AddTodo';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css'
import Heading from './components/Heading';

function App() {

  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Heading />
        <AddTodo />
        <FetchAllTodos />
      </QueryClientProvider>
    </div>
  )
}

export default App
