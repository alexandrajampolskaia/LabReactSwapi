import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<nav>
			<ul className="nav-links">
				<Link style={{textDecoration:"none"}} to="/home"> <li>Home</li> </Link>
				<Link style={{textDecoration:"none"}} to="/favorites"> <li>Favorites</li> </Link>
			</ul>
		</nav>
	)
}

export default Nav;