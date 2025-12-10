import { useState } from "react";
import { permissions } from "../data/dummyData";
import React from "react";

export default function Permissions() {
  const [permissionList, setPermissionList] = useState(permissions);

  // Calculate stats
  const total = permissionList.length;
  const active = permissionList.filter(p => p.status === "Active").length;
  const assigned = 10; // Stub value from screenshot
  const unused = total - assigned;

  const deletePermission = (id) => {
    setPermissionList(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">Permissions Dashboard</h1>
      <nav className="text-sm text-gray-600 mb-8">
        <span>Permissions</span>
      </nav>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold">Total Permissions</h3>
          <p className="text-4xl font-bold mt-2">{total}</p>
          <a href="#" className="text-sm underline mt-4 inline-block">View</a>
        </div>

        <div className="bg-green-600 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold">Active Permissions</h3>
          <p className="text-4xl font-bold mt-2">{active}</p>
          <a href="#" className="text-sm underline mt-4 inline-block">View</a>
        </div>

        <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold">Assigned Permissions</h3>
          <p className="text-4xl font-bold mt-2">{assigned}</p>
          <a href="#" className="text-sm underline mt-4 inline-block">View</a>
        </div>

        <div className="bg-red-600 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold">Unused Permissions</h3>
          <p className="text-4xl font-bold mt-2">{unused}</p>
          <a href="#" className="text-sm underline mt-4 inline-block">View</a>
        </div>
      </div>

      {/* Permissions Table */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gray-800 text-white px-6 py-4 flex items-center">
          <i className="fas fa-list mr-3"></i>
          <h2 className="text-xl font-semibold">System Permissions</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-6 py-4 text-left">#</th>
                <th className="px-6 py-4 text-left">Permission Name</th>
                <th className="px-6 py-4 text-left">Description</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {permissionList.map((perm, index) => (
                <tr key={perm.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4 font-medium">{perm.name}</td>
                  <td className="px-6 py-4 text-gray-700">{perm.description}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${
                      perm.status === "Active" ? "bg-green-600" : "bg-red-600"
                    }`}>
                      {perm.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1 rounded text-sm flex items-center gap-1">
                        <i className="fas fa-eye"></i> View
                      </button>
                      <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm flex items-center gap-1">
                        <i className="fas fa-edit"></i> Edit
                      </button>
                      <button
                        onClick={() => deletePermission(perm.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm flex items-center gap-1"
                      >
                        <i className="fas fa-trash"></i> Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}