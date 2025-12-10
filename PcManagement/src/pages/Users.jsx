import { useEffect } from "react";
import { users as dummyUsers } from "../data/dummyData";
import { DataTable } from "simple-datatables"; 

export default function Users() {
  const users = dummyUsers;

  useEffect(() => {
    new DataTable("#userTable", { searchable: true, perPage: 10 });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Registered Users</h1>

      <div className="bg-white rounded shadow overflow-hidden">
        <div className="p-4 bg-gray-800 text-white">
          <i className="fas fa-table mr-2"></i> User Table
        </div>
        <div className="overflow-x-auto">
          <table id="userTable" className="w-full">
            <thead className="bg-gray-700 text-white">
              <tr>
                <th>R.No</th><th>User ID</th><th>Name</th><th>Gender</th><th>Phone</th><th>Status</th><th>Role</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <tr key={u.id}>
                  <td>{i + 1}</td>
                  <td>{u.userId}</td>
                  <td>{u.name}</td>
                  <td>{u.gender}</td>
                  <td>{u.phone}</td>
                  <td><span className={`px-2 py-1 rounded text-white ${u.status === "Active" ? "bg-green-600" : "bg-gray-600"}`}>{u.status}</span></td>
                  <td>{u.role}</td>
                  <td className="flex gap-2">
                    <button className="bg-blue-600 text-white px-3 py-1 rounded"><i className="fas fa-eye"></i></button>
                    <button className="bg-yellow-600 text-white px-3 py-1 rounded"><i className="fas fa-edit"></i></button>
                    <button className="bg-red-600 text-white px-3 py-1 rounded"><i className="fas fa-trash"></i></button>
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