import React from 'react';
import { 
  HomeIcon, 
  ChartBarIcon, 
  UsersIcon, 
  CogIcon,
  XMarkIcon,
  Bars3Icon
} from '@heroicons/react/24/outline';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    { name: 'Dashboard', icon: HomeIcon },
    { name: 'Analytics', icon: ChartBarIcon },
    { name: 'Users', icon: UsersIcon },
    { name: 'Settings', icon: CogIcon },
  ];

  return(
    <>
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6 text-blue-600" />
        ) : (
          <Bars3Icon className="h-6 w-6 text-blue-600" />
        )}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 z-40 h-screen w-64
        bg-white shadow-lg transform transition-transform duration-200 ease-in-out
        lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-blue-600">Dashboard</h1>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className="flex items-center px-4 py-2.5 text-gray-700 rounded-lg
                         hover:bg-blue-50 hover:text-blue-600 transition duration-150"
              >
                <item.icon className="h-5 w-5 mr-3" />
                <span>{item.name}</span>
              </a>
            ))}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                {lvteixeira.charAt(0).toUpperCase()}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">{lvteixeira}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;