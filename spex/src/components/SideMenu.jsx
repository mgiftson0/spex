import { useState } from 'react';
import { Home, Settings, Info, ExitToApp, Help, ContactMail } from '@mui/icons-material'; // Added Help and ContactMail icons
import MenuOpenIcon from '@mui/icons-material/MenuOpen'; // Import MenuOpenIcon
import './SideMenu.css'; // Import the CSS file

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState('Home'); // Track the active menu item

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      {/* Top Section */}
      <div className="top-section">
        <div className="logo-container">
          <h1 className={`logo ${isExpanded ? 'show' : 'hide'}`}>Logo</h1>
          <button className="toggle-btn" onClick={() => setIsExpanded(!isExpanded)}>
            <MenuOpenIcon /> {/* Use MenuOpenIcon for the toggle button */}
          </button>
        </div>

        {/* Menu Items */}
        <div className="menu-items">
          <div
            className={`menu-item ${activeItem === 'Home' ? 'active' : ''}`}
            onClick={() => setActiveItem('Home')}
          >
            <Home className="icon blue" />
            {isExpanded && <span className="menu-text">Home</span>}
          </div>
          <div
            className={`menu-item ${activeItem === 'Settings' ? 'active' : ''}`}
            onClick={() => setActiveItem('Settings')}
          >
            <Settings className="icon green" />
            {isExpanded && <span className="menu-text">Settings</span>}
          </div>
          <div
            className={`menu-item ${activeItem === 'About' ? 'active' : ''}`}
            onClick={() => setActiveItem('About')}
          >
            <Info className="icon red" />
            {isExpanded && <span className="menu-text">About</span>}
          </div>
          <div
            className={`menu-item ${activeItem === 'Help' ? 'active' : ''}`}
            onClick={() => setActiveItem('Help')}
          >
            <Help className="icon gray" />
            {isExpanded && <span className="menu-text">Help</span>}
          </div>
          <div
            className={`menu-item ${activeItem === 'Contact' ? 'active' : ''}`}
            onClick={() => setActiveItem('Contact')}
          >
            <ContactMail className="icon gray" />
            {isExpanded && <span className="menu-text">Contact</span>}
          </div>
        </div>
      </div>



      {/* Bottom Section */}
      <div className="bottom-section">
      <hr style={{ margin: '16px 0', borderColor: '#d3d3d3' }} />

        <div
        
          className={`menu-item logout ${activeItem === 'Logout' ? 'active' : ''}`}
          onClick={() => setActiveItem('Logout')}
        >
          <ExitToApp className="icon gray" />
          {isExpanded && <span className="menu-text">Logout</span>}
        </div>
        {isExpanded && <p className="copyright">© 2024</p>}
      </div>
    </div>
  );
};

export default Sidebar;
