import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
      <header>
        <div className="container header">
          <div className="menu-logo">
            <h2><Link to={`/`}>Auto</Link></h2>
          </div>
          <nav className="menu">
            <ul>
              <li><Link to={`/`}>Home</Link></li>
              <li><Link to={`/cars`}>Cars</Link></li>
            </ul>
          </nav>
        </div>
      </header>
  )
}

export default Navbar;
