import { Link } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
    return (
      <>
        <nav className="navbar">
          <Link to="/">
            <a>Home</a>
          </Link>
          <Link to="/products">
            <a>Products</a>
          </Link>        
        </nav>
      </>
    )
  }
