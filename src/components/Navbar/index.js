import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const NavLink = ({ to, children }) => <Link className='navbar__link' to={ to }>{ children }</Link>;

class Navbar extends React.Component {
  render() {
    return(
      <nav className='navbar'>
        <div className='navbar__brand'>
          <NavLink to='/'>
            <img src='https://via.placeholder.com/640x640' alt='logo'></img>
          </NavLink>
        </div>
        <ul className='navbar__content'>
          <li>
            <NavLink to='/new'>New</NavLink>
          </li>
          <li>
            <NavLink to='/top'>Top</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;