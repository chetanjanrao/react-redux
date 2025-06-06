import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Import useSelector and useDispatch
import { fetchUsers } from './userSlice'; // Import the action creator
export default function userView() {
    const users = useSelector((state) => state.user); // Access users from the Redux store
    console.log('users', users); // Log the users to the console
    const dispatch = useDispatch(); // Initialize dispatch
    useEffect(() => {
        dispatch(fetchUsers()); // Dispatch an action to fetch users()
    }, [])
    return (
        <>
        <div className='container'>
            <h3>User List </h3>
            <button className='btn'>Fetch Users</button>
             </div>
            {users.loading && <h3>Loading...</h3>}
            {!users.loading && users.error ? <h3>Error: {users.error}</h3> : null}
            {!users.loading && users.users.length ? (
                <table className='modern-table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                !users.loading && <h3>No users found</h3>
            )}
        </>
    );
}     