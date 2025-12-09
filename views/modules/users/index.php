<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>User - DBU PC control system</title>
    <link
      href="https://cdn.jsdelivr.net/npm/simple-datatables@7.1.2/dist/style.min.css"
      rel="stylesheet"
    />
    <link href="../css/styles.css" rel="stylesheet" />
    <script
      src="https://use.fontawesome.com/releases/v6.3.0/js/all.js"
      crossorigin="anonymous"
    ></script>
  </head>
  <body class="sb-nav-fixed">
    <!-- VIEW USER MODAL -->
    <div
      class="modal fade"
      id="viewUserModal"
      tabindex="-1"
      aria-labelledby="viewUserLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="viewUserLabel">User Details</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div class="modal-body">
            <!-- BASIC USER INFO -->
            <h5>User Information</h5>
            <hr />
            <div class="row">
              <div class="col-md-4">
                <strong>User ID:</strong> <span id="v_user_id"></span>
              </div>
              <div class="col-md-4">
                <strong>Name:</strong> <span id="v_user_name"></span>
              </div>
              <div class="col-md-4">
                <strong>Gender:</strong> <span id="v_gender"></span>
              </div>
            </div>

            <div class="row mt-2">
              <div class="col-md-4">
                <strong>Phone:</strong> <span id="v_phone"></span>
              </div>
              <div class="col-md-4">
                <strong>Status:</strong> <span id="v_status"></span>
              </div>
              <div class="col-md-4">
                <strong>Role:</strong> <span id="v_role"></span>
              </div>
            </div>

            <!-- ROLE SPECIFIC INFO (depending on user type) -->
            <div id="role_specific" class="mt-4"></div>
          </div>

          <div class="modal-footer">
            <button class="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      <!-- Navbar Brand-->
      <a class="navbar-brand ps-3" href="../app/index.html">PC control system</a>
      <!-- Sidebar Toggle-->
      <button
        class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
        id="sidebarToggle"
        href="#!"
      >
        <i class="fas fa-bars"></i>
      </button>
      <!-- Navbar Search-->
      <form
        class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0"
      >
        <div class="input-group">
          <input
            class="form-control"
            type="text"
            placeholder="Search for..."
            aria-label="Search for..."
            aria-describedby="btnNavbarSearch"
          />
          <button class="btn btn-primary" id="btnNavbarSearch" type="button">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </form>
      <!-- Navbar-->
      <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            id="navbarDropdown"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            ><i class="fas fa-user fa-fw"></i
          ></a>
          <ul
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdown"
          >
            <li><a class="dropdown-item" href="#!">Activity Log</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#!">Logout</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    <div id="layoutSidenav">
      <div id="layoutSidenav_nav">
        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
          <div class="sb-sidenav-menu">
            <div class="nav">
              <div class="sb-sidenav-menu-heading">Core</div>
              <a class="nav-link" href="../app/index.html">
                <div class="sb-nav-link-icon">
                  <i class="fas fa-tachometer-alt"></i>
                </div>
                Dashboard
              </a>

              <a
                class="nav-link collapsed"
                href="#"
                data-bs-toggle="collapse"
                data-bs-target="#collapseLayouts"
                aria-expanded="false"
                aria-controls="collapseLayouts"
              >
                <div class="sb-nav-link-icon">
                  <i class="fas fa-columns"></i>
                </div>
                Permissions and Roles
                <div class="sb-sidenav-collapse-arrow">
                  <i class="fas fa-angle-down"></i>
                </div>
              </a>
              <div
                class="collapse"
                id="collapseLayouts"
                aria-labelledby="headingOne"
                data-bs-parent="#sidenavAccordion"
              >
                <nav class="sb-sidenav-menu-nested nav">
                  <a class="nav-link" href="../pages/permission.html"
                    >Permission</a
                  >
                  <a class="nav-link" href="../pages/role.html"
                    >Roles</a
                  >
                </nav>
              </div>
              <div class="sb-sidenav-menu-heading">Users management</div>
              <a class="nav-link" href="../pages/admin.html">
                <div class="sb-nav-link-icon">
                  <i class="fas fa-chart-area"></i>
                </div>
                Admin
              </a>
              <a class="nav-link" href="../pages/user.html">
                <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                User
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div id="layoutSidenav_content">
        <main>
          <div class="container-fluid px-4">
            <h1 class="mt-4">Registered Users</h1>

            <ol class="breadcrumb mb-4">
              <li class="breadcrumb-item">
                <a href="index.html">Dashboard</a>
              </li>
              <li class="breadcrumb-item active">Users</li>
            </ol>

            <div class="card mb-4">
              <div class="card-header">
                <i class="fas fa-table me-1"></i>
                User Table
              </div>

              <div class="card-body">
                <table id="datatablesSimple">
                  <thead>
                    <tr>
                      <th>R.No</th>
                      <th>User ID</th>
                      <th>Name</th>
                      <th>Gender</th>
                      <th>Phone</th>
                      <th>Status</th>
                      <th>Role</th>
                      <th>Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    <!-- =============== SAMPLE DUMMY DATA (Remove later) =============== -->
                    <tr>
                      <td>1</td>
                      <td>20231001</td>
                      <td>Abebe Kebede</td>
                      <td>Male</td>
                      <td>0912345678</td>
                      <td><span class="badge bg-success">Active</span></td>
                      <td>Student</td>
                      <td>
                        <button class="btn btn-primary btn-sm">
                          <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn btn-warning btn-sm">
                          <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-danger btn-sm">
                          <i class="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td>20231002</td>
                      <td>Helen Tadesse</td>
                      <td>Female</td>
                      <td>0911223344</td>
                      <td><span class="badge bg-secondary">Inactive</span></td>
                      <td>Staff</td>
                      <td>
                        <button class="btn btn-primary btn-sm">
                          <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn btn-warning btn-sm">
                          <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-danger btn-sm">
                          <i class="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <!-- =============================================================== -->
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>

        <footer class="py-4 bg-light mt-auto">
          <div class="container-fluid px-4">
            <div
              class="d-flex align-items-center justify-content-between small"
            >
              <div class="text-muted">Copyright &copy; Your Website 2023</div>
              <div>
                <a href="#">Privacy Policy</a>
                &middot;
                <a href="#">Terms &amp; Conditions</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
      crossorigin="anonymous"
    ></script>
    <script src="js/scripts.js"></script>
    <script
      src="https://cdn.jsdelivr.net/npm/simple-datatables@7.1.2/dist/umd/simple-datatables.min.js"
      crossorigin="anonymous"
    ></script>
    <script src="../js/datatables-simple-demo.js"></script>
  </body>
</html>
