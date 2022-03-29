import React from 'react';
import {NavLink, Link} from 'react-router-dom';

function Header({
  isDarkMode,
  onToggleDarkMode
}) {
  
  function handleClick() {
    onToggleDarkMode()
  }

  return (
    <nav>
      <h1 className="branding">
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <div className="navigation">
        <Link className="button" to="/projects">
          All Projects
        </Link>
        <Link className="button" to="/projects/new">
          Add Project
        </Link>
        <button onClick={handleClick}>{isDarkMode ? 'Dark' : 'Light'} Mode</button>
      </div>
    </nav>
  );
}

export default Header;
