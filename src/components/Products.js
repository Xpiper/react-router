import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Products = () => {
    return (
        <>
            <div>
                <input type='serach' placeholder='Search products'></input>
            </div>
            <nav>
                <Link to='featured'>Featuterd</Link>
                <Link to='/products/new'>New</Link>
            </nav>
            <Outlet/>
        </>
    )
}
