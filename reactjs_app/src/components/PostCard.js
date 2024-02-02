import React, { useState } from 'react';
import './CSS/PostCard.css'

function PostCard({ post }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="post-card" onClick={() => setIsExpanded(!isExpanded)}>
            <h3>{post.id}: {post.title}</h3>
            {isExpanded && (
                <div className="expanded-content">
                    <p1>{post.body}</p1>
                    <br /><br />
                    <p2>User Id: {post.userId}</p2>
                </div>
            )}
        </div>
    );
}

export default PostCard;