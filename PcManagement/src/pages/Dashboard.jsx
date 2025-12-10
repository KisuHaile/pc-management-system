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
    datasets: [
      {
        label: 'Users',
        data: [1, 1, 2, 0], // Replace with dynamic data if available
        backgroundColor: '#3B82F6',
        borderRadius: 6,
      }
    ]
  };

  const pieData = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        data: [males, females],
        backgroundColor: ['#3B82F6', '#EF4444'],
        hoverOffset: 8,
      }
    ]
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-gray-500 font-semibold">Total Users</h3>
          <p className="text-3xl font-bold text-gray-800 mt-2">{total}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-gray-500 font-semibold">Roles Count</h3>
          <p className="text-3xl font-bold text-gray-800 mt-2">{rolesCount}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-gray-500 font-semibold">Male Users</h3>
          <p className="text-3xl font-bold text-gray-800 mt-2">{males}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-gray-500 font-semibold">Female Users</h3>
          <p className="text-3xl font-bold text-gray-800 mt-2">{females}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Users per Role</h3>
          <Bar 
            data={barData} 
            options={{
              responsive: true,
              plugins: {
                legend: { display: false },
                tooltip: { mode: 'index', intersect: false },
              },
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: { stepSize: 1 },
                  grid: { color: '#E5E7EB' }
                },
                x: {
                  grid: { display: false }
                }
              }
            }} 
          />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Gender Distribution</h3>
          <Pie 
            data={pieData} 
            options={{
              responsive: true,
              plugins: {
                legend: { position: 'bottom', labels: { boxWidth: 20, padding: 15 } },
                tooltip: { mode: 'index' },
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
