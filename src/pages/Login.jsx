import React from 'react';

const Login = ({ setMode }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 w-screen">
      <div className="p-6 bg-white rounded shadow-md text-black">
        <h1 className="mb-4 text-2xl font-bold text-center">Choose Mode</h1>
        <div className="flex space-x-4">
          <button 
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            onClick={() => setMode('user')}
          >
            User
          </button>
          <button 
            className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700"
            onClick={() => setMode('admin')}
          >
            Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;