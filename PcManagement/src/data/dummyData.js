export let users = [
  { id: 1, userId: "20231001", name: "Abebe Kebede", gender: "Male", phone: "0912345678", status: "Active", role: "Student" },
  { id: 2, userId: "20231002", name: "Helen Tadesse", gender: "Female", phone: "0911223344", status: "Inactive", role: "Staff" },
  { id: 3, userId: "STU-2023-001", name: "Amanuel Dawit", gender: "Male", phone: "0912345678", status: "Active", role: "Student" },
  { id: 4, userId: "ADM-002", name: "Rahel Saba", gender: "Female", phone: "0911223344", status: "Active", role: "Admin" }
];

export let roles = [
  { id: 1, name: "SuperAdmin", status: "Active" },
  { id: 2, name: "Admin", status: "Active" },
  { id: 3, name: "Staff", status: "Active" },
  { id: 4, name: "Student", status: "Active" },
  { id: 5, name: "Guest", status: "Active" }
];

export let permissions = [
  { id: 1, name: "Manage Users", description: "Can create, edit, delete system users.", status: "Active" },
  { id: 2, name: "Register PC", description: "Allows user to register new PCs.", status: "Active" },
  { id: 3, name: "View Logs", description: "Can view user activity logs.", status: "Inactive" }
];
