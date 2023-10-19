import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostsRequest } from '../../store/post/action';
import { fetchUsersRequest } from '../../store/users/action';
import { useSelector, useDispatch } from 'react-redux';
import './UserProfile.css';
import TimeZone from '../../Components/TimeZone/TimeZone';
import PostPopup from '../../Components/PopUp/PostPopUp';

function UserProfile() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const user = useSelector((state) => state?.user?.users.find((u) => u.id === Number(id))) || {};
    const posts = useSelector((state) => state?.post?.posts) || [];
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        dispatch(fetchUsersRequest());
        dispatch(fetchPostsRequest());
    }, [dispatch]);

    if (!user.id) {
        return <div>Loading...</div>;
    }

    const openPostPopup = (post) => {
        setSelectedPost(post);
    };

    const closePostPopup = () => {
        setSelectedPost(null);
    };

    return (
        <>
            <TimeZone />
            <div className="user-profile">
                <div className="user-details">
                    <div className='sub-User'>
                        <div className="user-name">Name: {user.name}</div>
                        <div className="user-username">Username: {user.username}</div>
                        <div className="user-catch-phrase">Catchphrase: "{user.company?.catchPhrase || 'N/A'}"</div>
                    </div>
                    <div className='sub-User'>
                        <div className="user-address">
                            Address: {user.address.street}, City: {user.address.city}, Zipcode: {user.address.zipcode}
                        </div>
                        <div className="user-email">Email: {user.email}</div>
                        <div className="user-phone">Phone: {user.phone}</div>
                    </div>
                </div>

                <div className="user-posts">
                    {posts
                        .filter((post) => post.userId === user.id)
                        .map((post) => (
                            <div key={post.id} className="post" onClick={() => openPostPopup(post)}>
                                <div className="post-title">Title: {post.title}</div>
                                <div className="post-content">Post: {post.body}</div>
                            </div>
                        ))}
                </div>
            </div>

            {selectedPost && (
                <PostPopup post={selectedPost} onClose={closePostPopup} />
            )}
        </>
    );
}

export default UserProfile;
