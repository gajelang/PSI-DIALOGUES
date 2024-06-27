// src/pages/admin/AppAdmin.jsx
import React, { useState } from 'react';
import AdminSidebar from '../../components/Admin/Sidebar-Admin';
import Dashboard_a from '../../pages/admin/dashboard_a'; // Pastikan nama file dan path sesuai
import EarningsPage from '../../pages/admin/earnings_a'; // Tambahkan import untuk halaman earnings
import UserPage from '../../pages/admin/user_a'; // Tambahkan import untuk halaman user
import MentorPage from '../../pages/admin/mentor_a'; // Tambahkan import untuk halaman mentor

const AppAdmin = () => {
  const [currentPage, setCurrentPage] = useState('dashboard_a');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard_a':
        return <Dashboard_a />;
      case 'earnings_a':
        return <EarningsPage />;
      case 'user_a': // Tambahkan case untuk halaman user
        return <UserPage />;
      case 'mentor_a': // Tambahkan case untuk halaman mentor
        return <MentorPage />;
      default:
        return null;
    }
  };

  return (
    <div className="flex w-screen">
      <AdminSidebar setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <div className="flex-1 p-10">
        {renderPage()}
      </div>
    </div>
  );
};

export default AppAdmin;
