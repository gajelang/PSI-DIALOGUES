import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Mentoring from './pages/Mentoring';
import Social from './pages/Social';
import Tracker from './pages/Tracker'; // Pastikan nama file halaman dan import sesuai
import Module from './pages/Module'; // Pastikan nama file halaman dan import sesuai
import Settings from './pages/Settings';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'mentoring':
        return <Mentoring />;
      case 'social':
        return <Social />;
      case 'progress':
        return <Tracker />;
      case 'module':
        return <Module />;
      case 'settings':
        return <Settings />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex w-screen">
      <Sidebar setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <div className="flex-1 p-2">
        {renderPage()}
      </div>
    </div>
  );
};

export default App;
