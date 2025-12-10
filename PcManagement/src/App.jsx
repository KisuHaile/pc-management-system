import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Permissions from "./pages/Permissions";
import Roles from "./pages/Roles";
export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* TOP NAV */}
      <TopNav />

      {/* BODY: sidebar + content */}
      <div className="flex flex-1">
        {/* SIDEBAR */}
        <div className="w-64 bg-gray-900 text-white">
          <Sidebar />
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 p-4">
          <main>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/roles" element={<Roles />} />
              <Route path="/permissions" element={<Permissions />} />
            </Routes>
          </main>

          <footer className="py-4 text-center text-gray-500">
            © Your Website 2023
          </footer>
        </div>
      </div>
    </div>
  );
}
