import React, { useState } from 'react';
import { Home, Settings, Info } from '@mui/icons-material';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div
      className={`bg-black h-screen flex flex-col justify-between transition-all duration-300 ${
        isExpanded ? 'w-60' : 'w-20'
      }`}
    >
      {/* Top Section: Logo and Menu Items */}
      <div className="flex flex-col">
        {/* Logo */}
        <div className="flex items-center justify-between px-4 py-4">
          <h1
            className={`text-white text-xl font-bold transition-all duration-300 ${
              isExpanded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Logo
          </h1>
          <button
            className="text-white"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? '<' : '>'}
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col space-y-4 mt-4 px-2">
          <div className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-2 rounded-md">
            <Home className="text-white" />
            {isExpanded && <span className="text-white">Home</span>}
          </div>
          <div className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-2 rounded-md">
            <Settings className="text-white" />
            {isExpanded && <span className="text-white">Settings</span>}
          </div>
          <div className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-2 rounded-md">
            <Info className="text-white" />
            {isExpanded && <span className="text-white">About</span>}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center pb-4">
        <p className="text-gray-400 text-sm">{isExpanded ? '© 2024' : ''}</p>
      </div>
    </div>
  );
};

export default Sidebar;
