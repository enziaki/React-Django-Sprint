import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import Axios from 'axios';
import FetchCatFacts from './components/FetchCatFacts';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      }
    }
  });

  return (
    < div className="App">
      <QueryClientProvider client={queryClient}>
        <FetchCatFacts />
      </QueryClientProvider>
    </div>
  );
}

export default App;
