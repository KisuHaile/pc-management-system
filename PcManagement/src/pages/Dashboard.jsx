import { users } from "../data/dummyData";
import React from "react";
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Dashboard() {
  const total = users.length;
  const males = users.filter(u => u.gender === "Male").length;
  const females = users.filter(u => u.gender === "Female").length;
  const rolesCount = [...new Set(users.map(u => u.role))].length;

  const barData = {
    labels: ['Admin', 'Staff', 'Student', 'Guest'],
    datasets: [{ label: 'Users', data: [1, 1, 2, 0], backgroundColor: '#60A5FA' }]
  };

  const pieData = {
    labels: ['Male', 'Female'],
    datasets: [{ data: [males, females], backgroundColor: ['#60A5FA', '#F87171'] }]
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-blue-600 text-white p-6 rounded shadow">
          <div className="text-2xl font-bold">Total Users: {total}</div>
        </div>
        <div className="bg-green-600 text-white p-6 rounded shadow">
          <div className="text-2xl font-bold">Roles Count: {rolesCount}</div>
        </div>
        <div className="bg-yellow-500 text-white p-6 rounded shadow">
          <div className="text-2xl font-bold">Male Users: {males}</div>
        </div>
        <div className="bg-red-600 text-white p-6 rounded shadow">
          <div className="text-2xl font-bold">Female Users: {females}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-4">Users per Role</h3>
          <Bar data={barData} />
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-4">Gender Distribution</h3>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
}