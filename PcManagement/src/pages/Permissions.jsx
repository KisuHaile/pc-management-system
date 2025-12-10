import React, { useState } from "react";
import { permissions } from "../data/dummyData";

export default function Permissions() {
  const [permissionList, setPermissionList] = useState(permissions);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // "create", "view", "edit", "delete"
  const [selectedPermission, setSelectedPermission] = useState(null);
  const [formData, setFormData] = useState({ name: "", description: "", status: "Active" });

  const openModal = (type, permission = null) => {
    setModalType(type);
    setSelectedPermission(permission);
    if (type === "edit" && permission) {
      setFormData({ name: permission.name, description: permission.description, status: permission.status });
    } else if (type === "create") {
      setFormData({ name: "", description: "", status: "Active" });
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPermission(null);
  };

  const handleDelete = (id) => {
    setPermissionList(prev => prev.filter(p => p.id !== id));
    closeModal();
  };

  const handleCreate = () => {
    const newPermission = {
      id: permissionList.length + 1,
      ...formData,
    };
    setPermissionList([...permissionList, newPermission]);
    closeModal();
  };

  const handleEdit = () => {
    setPermissionList(prev =>
      prev.map(p => (p.id === selectedPermission.id ? { ...p, ...formData } : p))
    );
    closeModal();
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Permissions Dashboard</h1>
        <button
          onClick={() => openModal("create")}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          + Create Permission
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold">Total Permissions</h3>
          <p className="text-4xl font-bold mt-2">{permissionList.length}</p>
        </div>
        <div className="bg-green-600 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold">Active Permissions</h3>
          <p className="text-4xl font-bold mt-2">{permissionList.filter(p => p.status === "Active").length}</p>
        </div>
        <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold">Assigned Permissions</h3>
          <p className="text-4xl font-bold mt-2">10</p>
        </div>
        <div className="bg-red-600 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold">Unused Permissions</h3>
          <p className="text-4xl font-bold mt-2">{permissionList.length - 10}</p>
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
                      <button
                        onClick={() => openModal("view", perm)}
                        className="bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1 rounded text-sm flex items-center gap-1 transition"
                      >
                        <i className="fas fa-eye"></i> View
                      </button>
                      <button
                        onClick={() => openModal("edit", perm)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm flex items-center gap-1 transition"
                      >
                        <i className="fas fa-edit"></i> Edit
                      </button>
                      <button
                        onClick={() => openModal("delete", perm)}
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
                {modalType === "create" && "Create Permission"}
                {modalType === "view" && "Permission Details"}
                {modalType === "edit" && "Edit Permission"}
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
                    <label className="block mb-1 font-medium">Permission Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Description</label>
                    <textarea
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
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

              {modalType === "view" && selectedPermission && (
                <div className="space-y-2">
                  <p><strong>Name:</strong> {selectedPermission.name}</p>
                  <p><strong>Description:</strong> {selectedPermission.description}</p>
                  <p><strong>Status:</strong> {selectedPermission.status}</p>
                </div>
              )}

              {modalType === "delete" && selectedPermission && (
                <div className="text-red-600 font-medium">
                  Are you sure you want to delete permission "<strong>{selectedPermission.name}</strong>"?
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
              {modalType === "delete" && selectedPermission && (
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                  onClick={() => handleDelete(selectedPermission.id)}
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
