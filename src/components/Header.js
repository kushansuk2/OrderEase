import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/dark_logo_transparent.png"

// title react component
const Title = () => {
    return (
        <a href="/" className="header-img">
            <h3>OrderEase</h3>
        </a>
    );
};

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/">Cart</Link>
                    </li>
                    {isLoggedIn ? (
                        <li
                            onClick={() => setIsLoggedIn(false)}
                            className="auth-btn"
                        >
                            Logout
                        </li>
                    ) : (
                        <li
                            onClick={() => setIsLoggedIn(true)}
                            className="auth-btn"
                        >
                            Login
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Header; // export default only one thing
// most of the time follow this convention
