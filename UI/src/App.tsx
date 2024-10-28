import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Calendar from './pages/Calendar';
import Home from './pages/Home';
import Outfits from './pages/Outfits';
import Profile from './pages/Profile';
import Wardrobe from './pages/Wardrobe';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wardrobe" element={<Wardrobe />} />
        <Route path="/outfits" element={<Outfits />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Layout>
  );
};

export default App;
