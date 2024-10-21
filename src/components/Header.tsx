import React from 'react';
import { Link } from 'react-router-dom';
import { Home, LogOut } from 'lucide-react';

interface HeaderProps {
  isLoggedIn: boolean;
  userType: 'organization' | 'taxpayer' | null;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, userType, onLogout }) => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <Home className="mr-2" />
          Gram Panchayat Tax Portal
        </Link>
        <nav>
          {isLoggedIn ? (
            <div className="flex items-center">
              <span className="mr-4">Welcome, {userType}</span>
              <button
                onClick={onLogout}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded flex items-center"
              >
                <LogOut className="mr-2" />
                Logout
              </button>
            </div>
          ) : (
            <div>
              <Link to="/organization-login" className="mr-4 hover:underline">
                Organization Login
              </Link>
              <Link to="/taxpayer-login" className="hover:underline">
                Taxpayer Login
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;