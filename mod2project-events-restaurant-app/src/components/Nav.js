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
                     
                     <Link to="/articles"> 
                <li> Arts and Culture </li>
                     </Link>
                <Link to="/restaurants"> 
                <li> Restaurants</li>
                </Link>
              

        
        </ul>
        </nav>
    )
}

export default Nav
