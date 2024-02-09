import React from 'react'
import FetchAllTodos from './components/FetchAllTodos'
import AddTodo from './components/AddTodo';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {

  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <FetchAllTodos />
        <AddTodo />
      </QueryClientProvider>
    </div>
  )
}

export default App
