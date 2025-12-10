// src/pages/Admins.jsx
import { useState } from "react";
import { users } from "../data/dummyData";

export default function Admins() {
  const adminUsers = users.filter(u => u.role === "Admin" || u.role === "SuperAdmin");

  return (
    <div className="container-fluid px-4">
      <h1 className="mt-4">Admin Management</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item"><a href="/">Dashboard</a></li>
        <li className="breadcrumb-item active">Admins</li>
      </ol>

      {/* Stats Cards */}
      <div className="row mb-4">
        <div className="col-xl-3 col-md-6">
          <div className="card bg-primary text-white mb-4 shadow">
            <div className="card-body">
              <h4>25</h4>
              <span>Total Male Users</span>
            </div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <i className="fas fa-male fa-2x"></i>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-danger text-white mb-4 shadow">
            <div className="card-body">
              <h4>30</h4>
              <span>Total Female Users</span>
            </div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <i className="fas fa-female fa-2x"></i>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-success text-white mb-4 shadow">
            <div className="card-body">
              <h4>5</h4>
              <span>Total Admins</span>
            </div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <i className="fas fa-user-shield fa-2x"></i>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-dark text-white mb-4 shadow">
            <div className="card-body">
              <h4>55</h4>
              <span>Total Users</span>
            </div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <i className="fas fa-users fa-2x"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Registered Admins Table */}
      <div className="card mb-4 shadow">
        <div className="card-header">
          <i className="fas fa-users me-1"></i>
          Registered Admins
        </div>
        <div className="card-body">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>User ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {adminUsers.length > 0 ? (
                adminUsers.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.userId}</td>
                    <td>{user.name}</td>
                    <td>{user.gender}</td>
                    <td>{user.role}</td>
                    <td><span className={`badge bg-${user.status === "Active" ? "success" : "secondary"}`}>{user.status}</span></td>
                    <td>
                      <div className="d-flex gap-2">
                        <button className="btn btn-primary btn-sm"><i className="fas fa-eye"></i></button>
                        <button className="btn btn-warning btn-sm"><i className="fas fa-edit"></i></button>
                        <button className="btn btn-danger btn-sm"><i className="fas fa-trash"></i></button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center">No admins found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}