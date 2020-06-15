import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<nav>
			<ul className="nav-links">
				<Link style={{textDecoration:"none"}} to="/home"> <li className="navLi">Home</li> </Link>
				<Link style={{textDecoration:"none"}} to="/favorites"> <li className="navLi">Favorites</li> </Link>
			</ul>
		</nav>
	)
}

export default Nav;