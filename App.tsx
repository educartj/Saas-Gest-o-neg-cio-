
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { Users } from './components/Users';
import { Analytics } from './components/Analytics';
import { Settings } from './components/Settings';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Page, User } from './types';
import { initialUsers } from './data/mockUsers';

type ViewState = 'login' | 'register' | 'dashboard';

const App: React.FC = () => {
  const [viewState, setViewState] = useState<ViewState>('login');
  const [activePage, setActivePage] = useState<Page>(Page.DASHBOARD);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [users, setUsers] = useState<User[]>(initialUsers);

  const handleLogin = () => {
    setViewState('dashboard');
  };

  const handleLogout = () => {
    setViewState('login');
    setActivePage(Page.DASHBOARD);
  };
  
  const handleRegisterSuccess = () => {
    setViewState('dashboard');
  }

  const handleAddUser = (newUser: Omit<User, 'id' | 'avatar' | 'lastLogin'>) => {
    setUsers(prevUsers => {
        const newId = Math.max(...prevUsers.map(u => u.id)) + 1;
        const userToAdd: User = {
            ...newUser,
            id: newId,
            avatar: `https://picsum.photos/seed/${newId}/40`,
            lastLogin: 'Nunca',
        };
        return [...prevUsers, userToAdd];
    });
  };

  const handleUpdateUser = (updatedUser: User) => {
    setUsers(prevUsers => prevUsers.map(user => (user.id === updatedUser.id ? updatedUser : user)));
  };

  const handleDeleteUser = (userId: number) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
  };


  const renderPage = () => {
    switch (activePage) {
      case Page.DASHBOARD:
        return <Dashboard users={users} />;
      case Page.USERS:
        return <Users 
                  users={users} 
                  onAddUser={handleAddUser}
                  onUpdateUser={handleUpdateUser}
                  onDeleteUser={handleDeleteUser} 
                />;
      case Page.ANALYTICS:
        return <Analytics />;
      case Page.SETTINGS:
        return <Settings />;
      default:
        return <Dashboard users={users} />;
    }
  };
  
  if (viewState === 'login') {
    return <Login onLogin={handleLogin} onNavigateToRegister={() => setViewState('register')} />;
  }
  
  if (viewState === 'register') {
    return <Register onRegisterSuccess={handleRegisterSuccess} onNavigateToLogin={() => setViewState('login')} />;
  }

  return (
    <div className="flex h-screen bg-gray-900 overflow-hidden">
      <Sidebar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        isOpen={isSidebarOpen} 
        setIsOpen={setSidebarOpen} 
        onLogout={handleLogout}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header activePage={activePage} onMenuClick={() => setSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900 p-4 sm:p-6 lg:p-8">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

export default App;