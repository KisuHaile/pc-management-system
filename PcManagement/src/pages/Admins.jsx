import React, { useState } from "react";
import { admins } from "../data/dummyData"; // Make sure you have an 'admins' array

export default function Admins() {
  const [adminList, setAdminList] = useState(admins);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // "create", "view", "edit", "delete"
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const openModal = (type, admin = null) => {
    setModalType(type);
    setSelectedAdmin(admin);
    if ((type === "edit" || type === "view") && admin) {
      setFormData({ name: admin.name, email: admin.email, password: admin.password });
    } else if (type === "create") {
      setFormData({ name: "", email: "", password: "" });
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedAdmin(null);
  };

  const handleCreate = () => {
    const newAdmin = { id: adminList.length + 1, ...formData };
    setAdminList([...adminList, newAdmin]);
    closeModal();
  };

  const handleEdit = () => {
    setAdminList(prev =>
      prev.map(a => (a.id === selectedAdmin.id ? { ...a, ...formData } : a))
    );
    closeModal();
  };

  const handleDelete = (id) => {
    setAdminList(prev => prev.filter(a => a.id !== id));
    closeModal();
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admins</h1>
        <button
          onClick={() => openModal("create")}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          + Create Admin
        </button>
      </div>

      {/* Admin Table */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gray-800 text-white px-6 py-4 flex items-center">
          <i className="fas fa-user-shield mr-3"></i>
          <h2 className="text-xl font-semibold">System Admins</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-6 py-4 text-left">#</th>
                <th className="px-6 py-4 text-left">Name</th>
                <th className="px-6 py-4 text-left">Email</th>
                <th className="px-6 py-4 text-left">Password</th>
                <th className="px-6 py-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {adminList.map((admin, index) => (
                <tr key={admin.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4 font-medium">{admin.name}</td>
                  <td className="px-6 py-4">{admin.email}</td>
                  <td className="px-6 py-4">{admin.password}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => openModal("view", admin)}
                        className="bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1 rounded text-sm flex items-center gap-1 transition"
                      >
                        <i className="fas fa-eye"></i> View
                      </button>
                      <button
                        onClick={() => openModal("edit", admin)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm flex items-center gap-1 transition"
                      >
                        <i className="fas fa-edit"></i> Edit
                      </button>
                      <button
                        onClick={() => openModal("delete", admin)}
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
                {modalType === "create" && "Create Admin"}
                {modalType === "view" && "Admin Details"}
                {modalType === "edit" && "Edit Admin"}
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
                    <label className="block mb-1 font-medium">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Password</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                  </div>
                </>
              )}

              {modalType === "view" && selectedAdmin && (
                <div className="space-y-2">
                  <p><strong>Name:</strong> {selectedAdmin.name}</p>
                  <p><strong>Email:</strong> {selectedAdmin.email}</p>
                  <p><strong>Password:</strong> {selectedAdmin.password}</p>
                </div>
              )}

              {modalType === "delete" && selectedAdmin && (
                <div className="text-red-600 font-medium">
                  Are you sure you want to delete admin "<strong>{selectedAdmin.name}</strong>"?
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
              {modalType === "delete" && selectedAdmin && (
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                  onClick={() => handleDelete(selectedAdmin.id)}
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
