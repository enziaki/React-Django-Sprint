import { useQuery } from "react-query";
import Axios from "axios";
import './CSS/FetchCatFacts.css'

function FetchCatFacts() {
    const {
        data: catData,
        isLoading,
        isError,
        refetch,
    } = useQuery(["cat"], () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data)
    });

    if (isError) {
        return <h1> Caught an error</h1>
    }

    if (isLoading) {
        return <h1>Loading....</h1>
    }

    return (
        <div className="cat-fact-box">
            {isError && <p className="error-message">Caught an error</p>}
            {isLoading && <p className="loading-message">Loading...</p>}

            {!isError && !isLoading && (
                <div className="fact-content">
                    <p>{catData?.fact}</p>
                    <button className="update-button" onClick={refetch}>
                        More...
                    </button>
                </div>
            )}
        </div>
    );
};

export default FetchCatFacts;