import React from 'react';
import { FileText, DollarSign, Users, Bell } from 'lucide-react';

const OrganizationDashboard: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Organization Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard
          title="Total Tax Due"
          value="₹1,250,000"
          icon={<DollarSign className="w-8 h-8 text-green-500" />}
        />
        <DashboardCard
          title="Taxpayers"
          value="1,500"
          icon={<Users className="w-8 h-8 text-blue-500" />}
        />
        <DashboardCard
          title="Pending Notifications"
          value="25"
          icon={<Bell className="w-8 h-8 text-yellow-500" />}
        />
        <DashboardCard
          title="Tax Reports"
          value="View"
          icon={<FileText className="w-8 h-8 text-purple-500" />}
        />
      </div>
      {/* Add more dashboard components here */}
    </div>
  );
};

interface DashboardCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {icon}
      </div>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
};

export default OrganizationDashboard;