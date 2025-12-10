import React, { useState } from "react";
import { usersData, rolesData } from "../data/dummyData"; // Import your dummy users & roles

export default function Users() {
  const [userList, setUserList] = useState(usersData);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // "create", "view", "edit", "delete"
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({
    User_name: "",
    Gender: "Male",
    Phone: "",
    status: "Active",
    email: "",
    password: "",
    Role: "Student",
    PCs: [{ pc_serial: "", pc_name: "", pc_model: "", additional_info: "" }],
  });

  // Open modal
  const openModal = (type, user = null) => {
    setModalType(type);
    setSelectedUser(user);

    if (type === "edit" && user) {
      setFormData({
        ...user,
        PCs: user.PCs && user.PCs.length ? user.PCs : [{ pc_serial: "", pc_name: "", pc_model: "", additional_info: "" }],
      });
    } else if (type === "create") {
      setFormData({
        User_name: "",
        Gender: "Male",
        Phone: "",
        status: "Active",
        email: "",
        password: "",
        Role: "Student",
        PCs: [{ pc_serial: "", pc_name: "", pc_model: "", additional_info: "" }],
      });
    }

    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedUser(null);
  };

  // CRUD Handlers
  const handleCreate = () => {
    const newUser = { id: userList.length + 1, ...formData };
    setUserList([...userList, newUser]);
    closeModal();
  };

  const handleEdit = () => {
    setUserList(prev =>
      prev.map(u => (u.id === selectedUser.id ? { ...u, ...formData } : u))
    );
    closeModal();
  };

  const handleDelete = (id) => {
    setUserList(prev => prev.filter(u => u.id !== id));
    closeModal();
  };

  // Handle PC change
  const handlePCChange = (index, key, value) => {
    const updatedPCs = [...formData.PCs];
    updatedPCs[index][key] = value;
    setFormData({ ...formData, PCs: updatedPCs });
  };

  // Add new PC row
  const addPC = () => {
    setFormData({ ...formData, PCs: [...formData.PCs, { pc_serial: "", pc_name: "", pc_model: "", additional_info: "" }] });
  };

  // Remove PC row
  const removePC = (index) => {
    const updatedPCs = [...formData.PCs];
    updatedPCs.splice(index, 1);
    setFormData({ ...formData, PCs: updatedPCs });
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Users</h1>
        <button
          onClick={() => openModal("create")}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          + Create User
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gray-800 text-white px-6 py-4 flex items-center">
          <i className="fas fa-users mr-3"></i>
          <h2 className="text-xl font-semibold">System Users</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-6 py-4 text-left">#</th>
                <th className="px-6 py-4 text-left">Name</th>
                <th className="px-6 py-4 text-left">Email</th>
                <th className="px-6 py-4 text-left">Role</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {userList.map((user, index) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4 font-medium">{user.User_name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.Role}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${
                      user.status === "Active" ? "bg-green-600" : "bg-red-600"
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex gap-2">
                    <button onClick={() => openModal("view", user)} className="bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1 rounded text-sm flex items-center gap-1 transition">
                      <i className="fas fa-eye"></i> View
                    </button>
                    <button onClick={() => openModal("edit", user)} className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm flex items-center gap-1 transition">
                      <i className="fas fa-edit"></i> Edit
                    </button>
                    <button onClick={() => openModal("delete", user)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm flex items-center gap-1 transition">
                      <i className="fas fa-trash"></i> Delete
                    </button>
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
          <div className="bg-white w-full max-w-3xl mx-4 rounded-xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b">
              <h2 className="text-xl font-bold">
                {modalType === "create" && "Create User"}
                {modalType === "view" && "User Details"}
                {modalType === "edit" && "Edit User"}
                {modalType === "delete" && "Confirm Delete"}
              </h2>
              <button className="text-gray-500 hover:text-gray-700" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-4 max-h-96 overflow-y-auto space-y-4">
              {(modalType === "create" || modalType === "edit") && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-1 font-medium">Name</label>
                      <input type="text" className="w-full px-4 py-2 border rounded-lg" value={formData.User_name} onChange={e => setFormData({ ...formData, User_name: e.target.value })} />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Email</label>
                      <input type="email" className="w-full px-4 py-2 border rounded-lg" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Password</label>
                      <input type="password" className="w-full px-4 py-2 border rounded-lg" value={formData.password} onChange={e => setFormData({ ...formData, password: e.target.value })} />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Gender</label>
                      <select className="w-full px-4 py-2 border rounded-lg" value={formData.Gender} onChange={e => setFormData({ ...formData, Gender: e.target.value })}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Phone</label>
                      <input type="text" className="w-full px-4 py-2 border rounded-lg" value={formData.Phone} onChange={e => setFormData({ ...formData, Phone: e.target.value })} />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Role</label>
                      <select className="w-full px-4 py-2 border rounded-lg" value={formData.Role} onChange={e => setFormData({ ...formData, Role: e.target.value })}>
                        {rolesData.map(role => <option key={role.id} value={role.name}>{role.name}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Status</label>
                      <select className="w-full px-4 py-2 border rounded-lg" value={formData.status} onChange={e => setFormData({ ...formData, status: e.target.value })}>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                        <option value="Suspended">Suspended</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">PCs</label>
                    {(formData.PCs || []).map((pc, index) => (
                      <div key={index} className="grid grid-cols-4 gap-4 mb-2 items-end">
                        <input type="text" placeholder="Serial" className="px-3 py-2 border rounded" value={pc.pc_serial} onChange={e => handlePCChange(index, "pc_serial", e.target.value)} />
                        <input type="text" placeholder="PC Name" className="px-3 py-2 border rounded" value={pc.pc_name} onChange={e => handlePCChange(index, "pc_name", e.target.value)} />
                        <input type="text" placeholder="PC Model" className="px-3 py-2 border rounded" value={pc.pc_model} onChange={e => handlePCChange(index, "pc_model", e.target.value)} />
                        <input type="text" placeholder="Additional Info" className="px-3 py-2 border rounded" value={pc.additional_info} onChange={e => handlePCChange(index, "additional_info", e.target.value)} />
                        <button type="button" onClick={() => removePC(index)} className="bg-red-500 text-white px-2 py-1 rounded">Remove</button>
                      </div>
                    ))}
                    <button type="button" onClick={addPC} className="bg-green-500 text-white px-3 py-1 rounded mt-2">+ Add PC</button>
                  </div>
                </>
              )}

              {modalType === "view" && selectedUser && (
                <div className="space-y-2">
                  <p><strong>Name:</strong> {selectedUser.User_name}</p>
                  <p><strong>Email:</strong> {selectedUser.email}</p>
                  <p><strong>Role:</strong> {selectedUser.Role}</p>
                  <p><strong>Status:</strong> {selectedUser.status}</p>
                  <p><strong>Gender:</strong> {selectedUser.Gender}</p>
                  <p><strong>Phone:</strong> {selectedUser.Phone}</p>
                  <div>
                    <strong>PCs:</strong>
                    <ul className="list-disc list-inside">
                      {(selectedUser.PCs || []).map((pc, i) => (
                        <li key={i}>{pc.pc_serial} - {pc.pc_name} ({pc.pc_model})</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {modalType === "delete" && selectedUser && (
                <div className="text-red-600 font-medium">
                  Are you sure you want to delete user "<strong>{selectedUser.User_name}</strong>"?
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex justify-end px-6 py-4 border-t space-x-3">
              <button className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition" onClick={closeModal}>Cancel</button>
              {(modalType === "create" || modalType === "edit") && (
                <button
                  className={`px-4 py-2 rounded-lg text-white ${modalType === "create" ? "bg-blue-600 hover:bg-blue-700" : "bg-yellow-500 hover:bg-yellow-600"} transition`}
                  onClick={modalType === "create" ? handleCreate : handleEdit}
                >
                  {modalType === "create" ? "Create" : "Save"}
                </button>
              )}
              {modalType === "delete" && selectedUser && (
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition" onClick={() => handleDelete(selectedUser.id)}>Delete</button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
