import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from '../components/ScrollToTop/ScrollToTop';
import './layout.css';

export const MainLayout = () => {
  return (
    <div className="app-layout">
      <ScrollToTop />
      <Navbar />
      <main className="app-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
