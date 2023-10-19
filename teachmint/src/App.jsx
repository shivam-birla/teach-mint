import React from 'react';
import Users from './Components/Users/Users';
import UserProfile from './pages/userProfile/UserProfile';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/user/:id" element={<UserProfile />} />
    </Routes>
  );
}

export default App;

