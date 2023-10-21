import { useState } from "react";
const loggedInUser = () => {
  return false;
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="header">
      <a href="/">
        <img
          src="https://th.bing.com/th/id/OIP._b6q0KzTrD7VrwPuS-gojgAAAA?pid=ImgDet&rs=1"
          alt="logo"
          className="logo"
        />
      </a>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {/* {
                ((a=10),console.log(a)) we can write expressions but we cant write statement
            } */}

      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};
export default Header;
