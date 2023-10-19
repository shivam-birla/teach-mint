import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersRequest } from '../../store/users/action';
import './Users.css';
import { fetchPostsRequest } from '../../store/post/action';
import { useNavigate } from 'react-router-dom';
export default function Users() {
    const users = useSelector(state => state?.user?.users);
    const post = useSelector(state => state?.post?.posts);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    console.warn(post);
    useEffect(() => {
        dispatch(fetchUsersRequest());
        dispatch(fetchPostsRequest())
    }, [dispatch]);

    return (
        <>
            <h1>Users Directory</h1>
            <div className="user-list">
                {users?.map(user => (
                    <div key={user.id} className="user-card" onClick={() => navigate(`/user/${user.id}`)}>
                        <div className="user-name">{user.name}</div>
                        <div className="user-post">Posts:{post.length / users.length}</div>
                    </div>
                ))}
            </div>
        </>
    );
}

