import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ to, children }) => <Link to={ to }>{ children }</Link>;

class Navbar extends React.Component {
  render() {
    return(
      <div className='navbar'>
        <div className='navbar_brand'>
          <NavLink to='/'>
            logo
          </NavLink>
        </div>
        <ul>
          <li>
            <NavLink to='/new'>New</NavLink>
          </li>
          <li>
            <NavLink to='/top'>Top</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;