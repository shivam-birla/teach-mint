import React from 'react';
import './PostPopup.css';

const PostPopup = ({ post, onClose }) => {
    return (
        <div className="post-popup-overlay" onClick={onClose}>
            <div className="post-popup" >
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        </div>
    );
};

export default PostPopup;
