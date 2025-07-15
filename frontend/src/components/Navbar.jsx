import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

import "./css/Navbar.css";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className="navbar-wrapper">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="logo">
            <div className="logo-icon">
              <MessageSquare size={18} />
            </div>
            <h1 className="logo-title">QuickTalk</h1>
          </Link>
        </div>

        <div className="navbar-right">
          {authUser && (
            <>
              <Link to="/profile" className="navbar-btn">
                <User size={18} />
                <span className="btn-label">Profile</span>
              </Link>
              <button onClick={logout} className="navbar-btn logout">
                <LogOut size={18} />
                <span className="btn-label">Logout</span>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
