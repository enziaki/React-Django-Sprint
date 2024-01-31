import { useEffect, useState } from "react";
import axios from "axios";


// Footer will hold the number of posts fetched from the api endpoint
function Footer() {
    const [postCount, setPostCount] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPostCount = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                const posts = response.data;
                setPostCount(posts.length)
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPostCount();
    }, []);

    return (
        <footer className="post-count-footer">
            {isLoading && <p className="loading-message">Loading post count...</p>}
            {error && <p className="error-message">Error fetching post count: {error.message}</p>}
            {!isLoading && !error && <p className="post-count">Fetched {postCount} posts</p>}
        </footer>
    )
}

export default Footer;