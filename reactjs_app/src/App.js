import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
// import FetchCatFacts from './components/FetchCatFacts';
import FetchJSONPosts from './components/FetchJSONPosts';
import Footer from './components/Footer';

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
        {/* <FetchCatFacts /> */}
        <FetchJSONPosts />
        <Footer />
      </QueryClientProvider>
    </div>
  );
}

export default App;
