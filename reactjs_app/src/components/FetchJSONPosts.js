import { useQuery } from "react-query";
import Axios from "axios";
import PostCard from "./PostCard";

function FetchJSONPosts() {

    const {
        data: apiData,
        isLoading,
        isError,
        // refetch,
    } = useQuery(["posts"], () => {
        return Axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => res.data)
    });

    if (isError) {
        return <h1> Caught an error IN JSON</h1>
    }

    if (isLoading) {
        return <h1>Loading.... JSON</h1>
    }

    return (
        <h1>
            {apiData?.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
            {/* <button onClick={refetch}>Update Data</button> */}
        </h1>
    );
};

export default FetchJSONPosts;