import React, { useState } from 'react';
import { FileText, DollarSign, Calendar, CreditCard } from 'lucide-react';
import PaymentForm from '../components/PaymentForm';

const TaxpayerDashboard: React.FC = () => {
  const [currentTaxDue, setCurrentTaxDue] = useState(25000);
  const [lastPayment, setLastPayment] = useState(10000);

  const handlePayment = (amount: number) => {
    setCurrentTaxDue((prev) => Math.max(0, prev - amount));
    setLastPayment(amount);
    alert(`Payment of ₹${amount} successful!`);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Taxpayer Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <DashboardCard
          title="Current Tax Due"
          value={`₹${currentTaxDue.toLocaleString()}`}
          icon={<DollarSign className="w-8 h-8 text-red-500" />}
        />
        <DashboardCard
          title="Next Due Date"
          value="May 15, 2024"
          icon={<Calendar className="w-8 h-8 text-blue-500" />}
        />
        <DashboardCard
          title="Last Payment"
          value={`₹${lastPayment.toLocaleString()}`}
          icon={<CreditCard className="w-8 h-8 text-green-500" />}
        />
        <DashboardCard
          title="Tax History"
          value="View"
          icon={<FileText className="w-8 h-8 text-purple-500" />}
        />
      </div>
      <div className="max-w-md mx-auto">
        <PaymentForm onSubmit={handlePayment} />
      </div>
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

export default TaxpayerDashboard;