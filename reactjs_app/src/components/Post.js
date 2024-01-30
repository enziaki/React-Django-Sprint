function Post({ post }) {
    return (
        <div className="post">
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 100) + (post.body.length > 100 ? '...' : '')}</p>
        </div>
    );
}

export default Post;