import Post from './Post';

function PostList({ posts }) {
    if (!posts || posts.length === 0) {
        return <p>No posts found.</p>;
    }

    return (
        <div className="post-list">
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
}

export default PostList;