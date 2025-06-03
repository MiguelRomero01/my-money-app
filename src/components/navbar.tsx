import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, User, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';

// Import navigationItems and menuItems where are icons and types
import { navigationItems, menuItems } from '@helpers/types/navbar/navbarTypes';
import { useGetUserHook } from '@hooks/getUserHook';

const AsideDropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { email, username } = useGetUserHook();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown when collapsing sidebar
  useEffect(() => {
    if (isCollapsed) {
      setIsOpen(false);
    }
  }, [isCollapsed]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Aside Navigation */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 transform bg-white shadow-lg transition-all duration-300 ease-in-out lg:static lg:inset-0 lg:translate-x-0 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } ${isCollapsed ? 'lg:w-16' : 'lg:w-64'} w-64`}
      >
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4">
          {!isCollapsed && (
            <h1 className="hidden text-xl font-bold text-gray-800 lg:block">Dashboard</h1>
          )}
          <h1 className="text-xl font-bold text-gray-800 lg:hidden">Dashboard</h1>

          {/* Desktop collapse button */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 lg:flex"
            title={isCollapsed ? 'Open Menu' : 'Close Menu'}
          >
            {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>

          {/* Mobile close button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-3">
          <ul className="space-y-1">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.label.toLowerCase()}`}
                  className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-150 hover:bg-gray-100 hover:text-gray-900"
                  title={isCollapsed ? item.label : ''}
                >
                  <span className="mr-3 flex-shrink-0 text-lg">{item.icon}</span>
                  <span className={`transition-all duration-300 ${isCollapsed ? 'lg:hidden' : ''}`}>
                    {item.label}
                  </span>
                  {isCollapsed && (
                    <span className="invisible absolute left-full z-50 ml-2 hidden rounded bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 lg:block">
                      {item.label}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Profile Dropdown */}
        <div className="absolute right-0 bottom-0 left-0 border-t border-gray-200 p-4">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => !isCollapsed && setIsOpen(!isOpen)}
              className={`group flex w-full items-center rounded-lg bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700 transition-colors duration-150 hover:bg-gray-100 ${
                isCollapsed ? 'justify-center lg:px-2' : 'justify-between'
              }`}
            >
              <div
                className={`flex items-center ${isCollapsed ? 'lg:justify-center' : 'space-x-3'}`}
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                  <User size={16} className="text-white" />
                </div>
                <div
                  className={`text-left transition-all duration-300 ${isCollapsed ? 'lg:hidden' : ''}`}
                >
                  <p className="text-sm font-medium">{username}</p>
                  <p className="text-xs text-gray-500">{email}</p>
                </div>
              </div>
              {!isCollapsed && (
                <ChevronDown
                  size={16}
                  className={`text-gray-400 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              )}

              {isCollapsed && (
                <div className="invisible absolute left-full z-50 ml-2 hidden rounded bg-gray-800 px-3 py-2 text-xs whitespace-nowrap text-white opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 lg:block">
                  <div>{username}</div>
                  <div className="text-gray-300">{email}</div>
                </div>
              )}
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute right-0 bottom-full left-0 mb-2 origin-bottom rounded-lg border border-gray-200 bg-white shadow-lg transition-all duration-200 ${
                isOpen && !isCollapsed
                  ? 'translate-y-0 scale-100 opacity-100'
                  : 'pointer-events-none translate-y-2 scale-95 opacity-0'
              }`}
            >
              <div className="py-2">
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={index}
                      className={`flex w-full items-center px-4 py-2 text-sm transition-colors duration-150 ${
                        item.danger
                          ? 'text-red-600 hover:bg-red-50 hover:text-red-700'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                      onClick={() => {
                        setIsOpen(false);
                        item.onclick();
                      }}
                    >
                      <Icon size={16} className="mr-3" />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div
          className="bg-opacity-50 fixed inset-0 z-40 bg-black lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${isCollapsed ? 'lg:ml-16' : 'lg:ml-64'} lg:ml-0`}
      >
        {/* Mobile menu button */}
        <div className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AsideDropdownMenu;
