import React, { useEffect } from "react";

export default function TopNav() {
  useEffect(() => {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidenav = document.querySelector('.sb-sidenav');
    const content = document.getElementById('layoutSidenav_content');

    const toggle = () => {
      sidenav.classList.toggle('open');
      content.classList.toggle('sidebar-open');
    };
    sidebarToggle.addEventListener('click', toggle);
    return () => sidebarToggle.removeEventListener('click', toggle);
  }, []);

  return (
    <nav className="sb-topnav px-4 py-3 flex justify-between items-center shadow-lg bg-gray-900">
      <div className="flex items-center">
        <button id="sidebarToggle" className="text-white mr-4 text-xl">
          <i className="fas fa-bars"></i>
        </button>
        <a href="/" className="text-2xl font-bold text-white">PC Control System</a>
      </div>

      <div className="flex items-center space-x-4">
        <form className="hidden md:block">
          <div className="flex">
            <input type="text" placeholder="Search for..." className="px-4 py-2 rounded-l bg-gray-800 text-white border-none" />
            <button type="button" className="px-4 bg-blue-600 rounded-r">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>

        <div className="relative group">
          <button className="text-white text-xl">
            <i className="fas fa-user fa-fw"></i>
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg hidden group-hover:block">
            <a href="#!" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Activity Log</a>
            <hr />
            <a href="#!" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Logout</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
