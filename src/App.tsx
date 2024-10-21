import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import OrganizationLogin from './pages/OrganizationLogin';
import TaxpayerLogin from './pages/TaxpayerLogin';
import OrganizationDashboard from './pages/OrganizationDashboard';
import TaxpayerDashboard from './pages/TaxpayerDashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<'organization' | 'taxpayer' | null>(null);

  const handleLogin = (type: 'organization' | 'taxpayer') => {
    setIsLoggedIn(true);
    setUserType(type);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserType(null);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header isLoggedIn={isLoggedIn} userType={userType} onLogout={handleLogout} />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/organization-login"
              element={
                isLoggedIn && userType === 'organization' ? (
                  <Navigate to="/organization-dashboard" />
                ) : (
                  <OrganizationLogin onLogin={() => handleLogin('organization')} />
                )
              }
            />
            <Route
              path="/taxpayer-login"
              element={
                isLoggedIn && userType === 'taxpayer' ? (
                  <Navigate to="/taxpayer-dashboard" />
                ) : (
                  <TaxpayerLogin onLogin={() => handleLogin('taxpayer')} />
                )
              }
            />
            <Route
              path="/organization-dashboard"
              element={
                isLoggedIn && userType === 'organization' ? (
                  <OrganizationDashboard />
                ) : (
                  <Navigate to="/organization-login" />
                )
              }
            />
            <Route
              path="/taxpayer-dashboard"
              element={
                isLoggedIn && userType === 'taxpayer' ? (
                  <TaxpayerDashboard />
                ) : (
                  <Navigate to="/taxpayer-login" />
                )
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;