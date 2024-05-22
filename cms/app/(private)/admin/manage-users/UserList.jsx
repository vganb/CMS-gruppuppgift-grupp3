"use client"
import React, { useState } from 'react';
import {AddRole} from "./AddRole.jsx"

export default function UserList({ users }) {

    const [ error, setError ] = useState('')

    const handleSetAdmin = async (userId) => {
        const response = await AddRole(userId, 'admin')
        if (response.success) {
        console.log(`User ${userId} role updated to admin`)
        // Optionally, refresh the user list or update state to reflect the change
        } else {
        console.error(`Failed to update user ${userId} role to admin`)
        setError(`Failed to promote user with ID: ${userId}`);
        }
    }

    return (
        <div className="userList">
        {users.map((user) => (
            <div className="userItem" key={user.id}>
                <div className='userInfo'>
                    <p className="userText">
                        {user.firstName} {user.lastName} 
                    </p>
                    <p>{user.primaryEmailAddress}</p>
                </div>
                {user.publicMetadata?.role !== 'admin' && (
                    <button className='adminBtn' onClick={() => handleSetAdmin(user.id)}>Set as Admin</button>
                )}
                {user.publicMetadata?.role === 'admin' && (
                    <p className='adminRole'>Admin</p>
                )}
            </div>
        ))}
        {error && <p>Status: {error}</p>}
        </div>
    );
    }
