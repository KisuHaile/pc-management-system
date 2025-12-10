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
// dummyData.js

export const rolesData = [
  { id: 1, name: "SuperAdmin" },
  { id: 2, name: "Admin" },
  { id: 3, name: "Staff" },
  { id: 4, name: "Student" },
  { id: 5, name: "Guest" },
];

export const usersData = [
  {
    id: 1,
    User_name: "John Doe",
    Gender: "Male",
    Phone: "1234567890",
    status: "Active",
    email: "john@example.com",
    password: "123456",
    Role: "Admin",
    PCs: [
      { pc_serial: "PC001", pc_name: "Office PC", pc_model: "Dell OptiPlex", additional_info: "1st Floor" },
    ],
  },
  {
    id: 2,
    User_name: "Jane Smith",
    Gender: "Female",
    Phone: "0987654321",
    status: "Active",
    email: "jane@example.com",
    password: "abcdef",
    Role: "Staff",
    PCs: [],
  },
];

export let permissions = [
  { id: 1, name: "Manage Users", description: "Can create, edit, delete system users.", status: "Active" },
  { id: 2, name: "Register PC", description: "Allows user to register new PCs.", status: "Active" },
  { id: 3, name: "View Logs", description: "Can view user activity logs.", status: "Inactive" }
];
export const admins = [
  { id: 1, name: "John Admin", email: "john@example.com", password: "123456" },
  { id: 2, name: "Jane Admin", email: "jane@example.com", password: "abcdef" },
];
