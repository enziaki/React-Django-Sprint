import React, { useState } from 'react';
import './CSS/PostCard.css'

function PostCard({ post }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="post-card" onClick={() => setIsExpanded(!isExpanded)}>
            <h3>{post.id}: {post.title}</h3>
            {isExpanded && (
                <div className="expanded-content">
                    <p>Body: {post.body}</p>
                    <p>User Id: {post.userId}</p>
                </div>
            )}
        </div>
    );
}

export default PostCard;