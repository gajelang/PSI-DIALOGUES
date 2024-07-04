import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import AppAdmin from './pages/admin/App-Admin.jsx';
import Login from './pages/Login.jsx';
import './index.css';
import AppMentor from './pages/mentor/App-Mentor.jsx';

const Main = () => {
  const [mode, setMode] = useState(null);

  const renderContent = () => {
    switch (mode) {
      case 'user':
        return <App />;
      case 'admin':
        return <AppAdmin />;
      case 'mentor':
        return <AppMentor />;
      default:
        return <Login setMode={setMode} />;
    }
  };

  return (
    <React.StrictMode>
      {renderContent()}
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
