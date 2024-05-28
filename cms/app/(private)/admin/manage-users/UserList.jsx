"use client"
import React, { useState } from 'react';
import {AddRole} from "./AddRole.js"
import { useUser } from '@clerk/nextjs';

export default function UserList({ users }) {

    const { user } = useUser()

    const [ status, setStatus ] = useState('')

    const handleSetAdmin = async (userId, role) => {

        if (userId === user.id) {
            setStatus("You cannot change your own role");
            return;
        }

        console.log({userId, role})
        const response = await AddRole(userId, role)
        if (response.success) {
        console.log(`User ${userId} role updated to ${role}`)
        setStatus(`Promoted user with ID: ${userId} to admin`)
        } else {
        console.error(`Failed to update user ${userId} role to admin`)
        setStatus(`Failed to promote user with ID: ${userId}`);
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
                    <button className='adminBtn' onClick={() => handleSetAdmin(user.id, 'admin')}>Set as Admin</button>
                )}
                {user.publicMetadata?.role === 'admin' && (
                    <p className='adminRole' onClick={() => handleSetAdmin(user.id, null)}>Admin</p>
                )}
            </div>
        ))}
        {status && <p>Status: {status}</p>}
        </div>
    );
    }
