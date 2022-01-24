import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

export const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveUsers = searchParams.get('filter') === 'active';
    return (
        <div>
            <h2>User 1</h2>
            <h2>User 1</h2>
            <h2>User 1</h2>
            <Outlet></Outlet>
            <div>
                <button onClick={() => setSearchParams({ filter: 'active' })}>Actie Users</button>
                <button onClick={() => setSearchParams({})}>Reset Filter</button>
            </div>
            {
                showActiveUsers ? <h2>showing active users</h2> : <h2>showing all users</h2>
            }
        </div>
    )
}
