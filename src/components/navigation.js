import React from 'react'
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/comments">Comments</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
           
        </ul>
    )
}

export default Navigation
