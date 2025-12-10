import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TopNav() {
  const navigate = useNavigate();

  useEffect(() => {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidenav = document.querySelector('.sb-sidenav');
    const content = document.getElementById('layoutSidenav_content');

    const toggleSidebar = () => {
      sidenav.classList.toggle('open');
      content.classList.toggle('sidebar-open');
    };

    sidebarToggle.addEventListener('click', toggleSidebar);
    return () => sidebarToggle.removeEventListener('click', toggleSidebar);
  }, []);

  const handleLogout = () => {
    // Remove admin info from localStorage
    localStorage.removeItem("adminUser");
    // Redirect to login page
    navigate("/login");
  };

  return (
    <nav className="sb-topnav px-4 py-3 flex justify-between items-center shadow-lg bg-gray-900">
      <div className="flex items-center">
        <button id="sidebarToggle" className="text-white mr-4 text-xl">
          <i className="fas fa-bars"></i>
        </button>
        <a href="/" className="text-2xl font-bold text-white">PC Control System</a>
      </div>

      <div className="flex items-center space-x-4">
        {/* Profile dropdown */}
        <div className="relative group">
          <button className="flex items-center space-x-2 text-white">
            <i className="fas fa-user fa-lg"></i>
            <span className="hidden md:block">John Doe</span>
            <i className="fas fa-angle-down ml-1"></i>
          </button>

          <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
            <a
              href="#!"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={handleLogout}
            >
              Logout
            </a>
            <hr />
            <a href="#!" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
              Activity Log
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
