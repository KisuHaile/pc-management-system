import React, { useState } from "react";
import { roles } from "../data/dummyData"; // Make sure your dummyData exports 'roles'

export default function Roles() {
  const [roleList, setRoleList] = useState(roles);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // "create", "view", "edit", "delete"
  const [selectedRole, setSelectedRole] = useState(null);
  const [formData, setFormData] = useState({ name: "", status: "Active" });

  const openModal = (type, role = null) => {
    setModalType(type);
    setSelectedRole(role);
    if (type === "edit" && role) {
      setFormData({ name: role.name, status: role.status });
    } else if (type === "create") {
      setFormData({ name: "", status: "Active" });
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedRole(null);
  };

  const handleCreate = () => {
    const newRole = { id: roleList.length + 1, ...formData };
    setRoleList([...roleList, newRole]);
    closeModal();
  };

  const handleEdit = () => {
    setRoleList(prev =>
      prev.map(r => (r.id === selectedRole.id ? { ...r, ...formData } : r))
    );
    closeModal();
  };

  const handleDelete = (id) => {
    setRoleList(prev => prev.filter(r => r.id !== id));
    closeModal();
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Roles</h1>
        <button
          onClick={() => openModal("create")}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          + Create Role
        </button>
      </div>

      {/* Roles Table */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gray-800 text-white px-6 py-4 flex items-center">
          <i className="fas fa-users mr-3"></i>
          <h2 className="text-xl font-semibold">System Roles</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-6 py-4 text-left">#</th>
                <th className="px-6 py-4 text-left">Role Name</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {roleList.map((role, index) => (
                <tr key={role.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4 font-medium">{role.name}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${
                      role.status === "Active" ? "bg-green-600" : "bg-red-600"
                    }`}>
                      {role.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => openModal("view", role)}
                        className="bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1 rounded text-sm flex items-center gap-1 transition"
                      >
                        <i className="fas fa-eye"></i> View
                      </button>
                      <button
                        onClick={() => openModal("edit", role)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm flex items-center gap-1 transition"
                      >
                        <i className="fas fa-edit"></i> Edit
                      </button>
                      <button
                        onClick={() => openModal("delete", role)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm flex items-center gap-1 transition"
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white w-full max-w-lg mx-4 rounded-xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b">
              <h2 className="text-xl font-bold">
                {modalType === "create" && "Create Role"}
                {modalType === "view" && "Role Details"}
                {modalType === "edit" && "Edit Role"}
                {modalType === "delete" && "Confirm Delete"}
              </h2>
              <button className="text-gray-500 hover:text-gray-700" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-4 max-h-80 overflow-y-auto space-y-4">
              {(modalType === "create" || modalType === "edit") && (
                <>
                  <div>
                    <label className="block mb-1 font-medium">Role Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Status</label>
                    <select
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </>
              )}

              {modalType === "view" && selectedRole && (
                <div className="space-y-2">
                  <p><strong>Name:</strong> {selectedRole.name}</p>
                  <p><strong>Status:</strong> {selectedRole.status}</p>
                </div>
              )}

              {modalType === "delete" && selectedRole && (
                <div className="text-red-600 font-medium">
                  Are you sure you want to delete role "<strong>{selectedRole.name}</strong>"?
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex justify-end px-6 py-4 border-t space-x-3">
              <button
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
                onClick={closeModal}
              >
                Cancel
              </button>
              {(modalType === "create" || modalType === "edit") && (
                <button
                  className={`px-4 py-2 rounded-lg text-white ${
                    modalType === "create" ? "bg-blue-600 hover:bg-blue-700" : "bg-yellow-500 hover:bg-yellow-600"
                  } transition`}
                  onClick={modalType === "create" ? handleCreate : handleEdit}
                >
                  {modalType === "create" ? "Create" : "Save"}
                </button>
              )}
              {modalType === "delete" && selectedRole && (
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                  onClick={() => handleDelete(selectedRole.id)}
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
