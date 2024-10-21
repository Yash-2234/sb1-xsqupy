import React from 'react';
import { Link } from 'react-router-dom';
import { Building, User } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to Gram Panchayat Tax Portal</h1>
      <p className="text-xl mb-8">
        Manage your tax dues and make online payments easily.
      </p>
      <div className="flex justify-center space-x-4">
        <Link
          to="/organization-login"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
        >
          <Building className="mr-2" />
          Organization Login
        </Link>
        <Link
          to="/taxpayer-login"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center"
        >
          <User className="mr-2" />
          Taxpayer Login
        </Link>
      </div>
    </div>
  );
};

export default Home;