import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Login from "./auth/login";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Permissions from "./pages/Permissions";
import Roles from "./pages/Roles";
import Admins from "./pages/Admins";
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";

// Protected route
function ProtectedRoute({ children }) {
  const adminUser = localStorage.getItem("adminUser");
  return adminUser ? children : <Navigate to="/login" />;
}

// Layout wrapper for all protected pages
function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation */}
      <TopNav />

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 bg-gray-900 text-white">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-100">
          <Outlet /> {/* Renders nested routes */}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      {/* Protected routes with layout */}
      <Route
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/permissions" element={<Permissions />} />
        <Route path="/admins" element={<Admins />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
