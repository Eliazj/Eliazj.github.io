/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import LinkTree from './pages/LinkTree';

// Scroll to top on route change, or scroll to hash
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small timeout to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col min-h-screen font-sans bg-cream text-coffee selection:bg-gold selection:text-coffee">
    <Navbar />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/menu" element={<MainLayout><Menu /></MainLayout>} />
        <Route path="/linktree" element={<LinkTree />} />
      </Routes>
    </Router>
  );
}
