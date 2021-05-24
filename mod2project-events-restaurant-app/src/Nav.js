import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <nav> 
        <Link to='/'> 
        <h3 className="logo"> Logo</h3>
        </Link>
        <ul className="navLinks">  
                <Link to='/'>
            <li> Home</li>
               </Link>

                <li> Events </li> 
                <li> Restaurants</li>

               <Link to='/saved'> 
            <li>  Saved</li>
            </Link>

        
        </ul>
        </nav>
    )
}

export default Nav
