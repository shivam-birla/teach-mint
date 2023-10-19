import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersRequest } from '../../store/users/action';
import './Users.css';

export default function Users() {
    const users = useSelector(state => state?.user?.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsersRequest());
    }, [dispatch]);

    return (
        <>
            <h1>Users Directory</h1>
            <div className="user-list">
                {users?.map(user => (
                    <div key={user.id} className="user-card">
                        <div className="user-name">{user.name}</div>
                        <div className="user-email">{user.email}</div>
                    </div>
                ))}
            </div>
        </>
    );
}

