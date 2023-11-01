import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import useOnline from "../utils/useOnline";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const isOnline = useOnline();
  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} alt="logo" className="logo" />
      </Link>
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
          </Link>
          <Link to="/instamart">
            <li>Instamart</li>
          </Link>
        </ul>
      </div>
      {/* {
          ((a=10),console.log(a)) we can write expressions but we cant write statement
      } */}

      <h1>{isOnline ? "✅" : "🔴"}</h1>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};
export default Header;
