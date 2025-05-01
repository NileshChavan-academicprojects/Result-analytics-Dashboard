import { useState, useEffect } from "react";
import axios from "axios";
import "./navbar.scss";

const Navbar = () => {
  const [notifications, setNotifications] = useState(1);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [userName, setUserName] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchUser = () => {
      const storedUser = localStorage.getItem("userName");
      if (storedUser) {
        setUserName(storedUser);
        fetchUserProfile(storedUser);
      }
    };
    
    fetchUser();
    
    window.addEventListener("storage", fetchUser);
    return () => window.removeEventListener("storage", fetchUser);
  }, []);

  const fetchUserProfile = async (username) => {
    try {
      const response = await axios.get(`/api/user/profile?username=${username}`);
      setUserProfile(response.data);
    } catch (error) {
      console.error("Error fetching user profile", error);
    }
  };

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem("userName");
    setUserName(null);
    setUserProfile(null);
    window.location.href = "/login";
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src="/logo.svg" alt="Logo" />
        <span>Result Analytics Dashboard</span>
      </div>

      <div className="icons">
        <div className="search-container">
          <img
            src="/search.svg"
            alt="Search"
            className="icon"
            onClick={handleSearchToggle}
          />
          {searchOpen && (
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
          )}
        </div>
        <img src="/app.svg" alt="Apps" className="icon" />
        <img src="/expand.svg" alt="Expand" className="icon" />

        <div className="notification">
          <img src="/notifications.svg" alt="Notifications" />
          {notifications > 0 && <span>{notifications}</span>}
        </div>

        {userName ? (
          <div className="user-profile" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <img
              src={userProfile?.avatar || "https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg"}
              alt="User"
            />
            <span>{userProfile?.name || userName}</span>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <button className="dropdown-item" onClick={() => window.location.href = "/profile"}>View Profile</button>
                <button className="dropdown-item" onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <button onClick={() => window.location.href = "/login"} className="logout-btn">
            Logout
          </button>
        )}

        <img src="/settings.svg" alt="Settings" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;