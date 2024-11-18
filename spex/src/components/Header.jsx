import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <div className="header">
      {/* Logo */}
      

      {/* Search Bar */}
      <div className="header-search">
        <SearchIcon className="search-icon" />
        <input type="text" placeholder="Search..." className="search-input" />
      </div>

      {/* Avatar */}
      <div className="header-avatar">
        <Avatar alt="User" src="https://via.placeholder.com/150" />
      </div>
    </div>
  );
};

export default Header;
