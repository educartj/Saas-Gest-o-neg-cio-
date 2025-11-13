
import React from 'react';
import { NAV_ITEMS, LogoutIcon } from '../constants';
import { Page } from '../types';

interface SidebarProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onLogout: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activePage, setActivePage, isOpen, setIsOpen, onLogout }) => {
  const baseClasses = "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200";
  const activeClasses = "bg-primary text-white";
  const inactiveClasses = "text-gray-400 hover:bg-gray-700 hover:text-white";

  return (
    <>
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden ${isOpen ? 'block' : 'hidden'}`} onClick={() => setIsOpen(false)}></div>
      <aside className={`absolute lg:relative inset-y-0 left-0 bg-gray-800 w-64 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out z-40 flex flex-col`}>
        <div className="flex items-center justify-center h-20 border-b border-gray-700">
          <h1 className="text-2xl font-bold text-white">SaaS Corp</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActivePage(item.name);
                setIsOpen(false);
              }}
              className={`${baseClasses} ${activePage === item.name ? activeClasses : inactiveClasses}`}
            >
              <item.icon className="h-6 w-6 mr-3" />
              {item.name}
            </a>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-700">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onLogout();
              }}
              className={`${baseClasses} ${inactiveClasses}`}
            >
              <LogoutIcon className="h-6 w-6 mr-3" />
              Sair
            </a>
        </div>
      </aside>
    </>
  );
};
