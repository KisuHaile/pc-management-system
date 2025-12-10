import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  // Track dropdown open/close for each section
  const [isCoreOpen, setCoreOpen] = useState(true); // open by default
  const [isUsersOpen, setUsersOpen] = useState(true); // open by default
  const [isPermissionsOpen, setPermissionsOpen] = useState(false); // nested dropdown

  return (
    <nav className="sb-sidenav bg-gray-900 text-white h-full overflow-y-auto">
      <div className="p-4">
        <div className="text-xl font-bold mb-8">Menu</div>

        {/* Core Section */}
        <div className="mb-4">
          <button
            onClick={() => setCoreOpen(!isCoreOpen)}
            className="w-full flex justify-between items-center py-2 px-4 hover:bg-gray-800 rounded"
          >
            <span className="uppercase text-gray-400 text-xs font-bold">Core</span>
            <i className={`fas fa-angle-down transition-transform duration-200 ${isCoreOpen ? "rotate-180" : ""}`}></i>
          </button>

          {isCoreOpen && (
            <div className="mt-2 flex flex-col space-y-1">
              <NavLink
                to="/"
                className="flex items-center py-2 px-4 rounded hover:bg-gray-800"
              >
                <i className="fas fa-tachometer-alt mr-3"></i> Dashboard
              </NavLink>

              {/* Permissions and Roles nested dropdown */}
              <div>
                <button
                  onClick={() => setPermissionsOpen(!isPermissionsOpen)}
                  className="w-full flex justify-between items-center py-2 px-4 hover:bg-gray-800 rounded"
                >
                  <div className="flex items-center">
                    <i className="fas fa-columns mr-3"></i> Permissions and Roles
                  </div>
                  <i className={`fas fa-angle-down transition-transform duration-200 ${isPermissionsOpen ? "rotate-180" : ""}`}></i>
                </button>
                {isPermissionsOpen && (
                  <div className="pl-8 mt-2 flex flex-col space-y-1">
                    <NavLink to="/permissions" className="block py-2 hover:text-blue-400">
                      Permissions
                    </NavLink>
                    <NavLink to="/roles" className="block py-2 hover:text-blue-400">
                      Roles
                    </NavLink>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Users Management Section */}
        <div className="mb-4">
          <button
            onClick={() => setUsersOpen(!isUsersOpen)}
            className="w-full flex justify-between items-center py-2 px-4 hover:bg-gray-800 rounded"
          >
            <span className="uppercase text-gray-400 text-xs font-bold">Users Management</span>
            <i className={`fas fa-angle-down transition-transform duration-200 ${isUsersOpen ? "rotate-180" : ""}`}></i>
          </button>

          {isUsersOpen && (
            <div className="mt-2 flex flex-col space-y-1">
              <NavLink
                to="/admins"
                className="flex items-center py-2 px-4 rounded hover:bg-gray-800"
              >
                <i className="fas fa-chart-area mr-3"></i> Admin
              </NavLink>
              <NavLink
                to="/users"
                className="flex items-center py-2 px-4 rounded hover:bg-gray-800"
              >
                <i className="fas fa-table mr-3"></i> Users
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
