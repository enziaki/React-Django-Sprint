import { useQuery } from "react-query";
import Axios from "axios";

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
        <h1>
            <p>{catData?.fact}</p>
            <button onClick={refetch}>Update Data</button>
        </h1>
    );
};

export default FetchCatFacts;