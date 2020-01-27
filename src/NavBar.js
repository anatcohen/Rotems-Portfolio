import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <header>
      <div className="headerButtons">
        <Link to="/"><button>Home</button></Link>
        <Link to='/Portfolio'><button>Portfolio</button></Link>
        <Link to='/Contact'><button>Contact</button></Link>
        <Link to='/SignIn'><button>Sign In</button></Link>
      </div>
    </header >
  );
}
