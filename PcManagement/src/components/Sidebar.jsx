import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <nav className="sb-sidenav overflow-y-auto">
      <div className="p-4">
        <div className="text-xl font-bold mb-8">Menu</div>

        <div className="mb-6">
          <div className="text-gray-400 uppercase text-xs mb-2">Core</div>
          <NavLink to="/" className="flex items-center py-2 px-4 rounded hover:bg-gray-800">
            <i className="fas fa-tachometer-alt mr-3"></i> Dashboard
          </NavLink>

          <div className="collapse-group">
            <button className="w-full flex justify-between items-center py-2 px-4 hover:bg-gray-800">
              <div className="flex items-center">
                <i className="fas fa-columns mr-3"></i> Permissions and Roles
              </div>
              <i className="fas fa-angle-down"></i>
            </button>

            <div className="collapse-content pl-8">
              <NavLink to="/permissions" className="block py-2 hover:text-blue-400">Permissions</NavLink>
              <NavLink to="/roles" className="block py-2 hover:text-blue-400">Roles</NavLink>
            </div>
          </div>
        </div>

        <div>
          <div className="text-gray-400 uppercase text-xs mb-2">Users Management</div>
          <NavLink to="/admins" className="flex items-center py-2 px-4 rounded hover:bg-gray-800">
            <i className="fas fa-chart-area mr-3"></i> Admin
          </NavLink>

          <NavLink to="/users" className="flex items-center py-2 px-4 rounded hover:bg-gray-800">
            <i className="fas fa-table mr-3"></i> Users
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
