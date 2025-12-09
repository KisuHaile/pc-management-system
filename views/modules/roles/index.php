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
    <title>DBU PC controller system</title>
    <link href="../css/styles.css" rel="stylesheet" />
    <script
      src="https://use.fontawesome.com/releases/v6.3.0/js/all.js"
      crossorigin="anonymous"
    ></script>
  </head>
  <body class="sb-nav-fixed">
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
            <h1 class="mt-4">Role Management</h1>

            <ol class="breadcrumb mb-4">
              <li class="breadcrumb-item"><a href="index.php">Dashboard</a></li>
              <li class="breadcrumb-item active">Roles</li>
            </ol>

            <!-- ========== ADD ROLE FORM ========== -->
            <div class="card mb-4 shadow">
              <div class="card-header">
                <i class="fas fa-plus-circle me-1"></i>
                Add New Role
              </div>
              <div class="card-body">
                <form id="roleForm">
                  <div class="row mb-3">
                    <div class="col-md-6">
                      <label class="form-label">Role Name</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter role name (e.g., Librarian)"
                      />
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary">
                    <i class="fas fa-save"></i> Add Role
                  </button>
                </form>
              </div>
            </div>

            <!-- ========== ROLES TABLE ========== -->
            <div class="card mb-4 shadow">
              <div class="card-header">
                <i class="fas fa-user-tag me-1"></i>
                Existing Roles
              </div>
              <div class="card-body">
                <table class="table table-bordered table-hover">
                  <thead class="table-dark">
                    <tr>
                      <th>#</th>
                      <th>Role Name</th>
                      <th>Status</th>
                      <th width="180">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    <!-- Example Role -->
                    <tr>
                      <td>1</td>
                      <td>SuperAdmin</td>
                      <td><span class="badge bg-success">Active</span></td>
                      <td>
                        <div class="d-flex gap-2">
                          <button class="btn btn-warning btn-sm">
                            <i class="fas fa-edit"></i>
                          </button>
                          <button class="btn btn-danger btn-sm">
                            <i class="fas fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td>Admin</td>
                      <td><span class="badge bg-success">Active</span></td>
                      <td>
                        <div class="d-flex gap-2">
                          <button class="btn btn-warning btn-sm">
                            <i class="fas fa-edit"></i>
                          </button>
                          <button class="btn btn-danger btn-sm">
                            <i class="fas fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>3</td>
                      <td>Staff</td>
                      <td><span class="badge bg-success">Active</span></td>
                      <td>
                        <div class="d-flex gap-2">
                          <button class="btn btn-warning btn-sm">
                            <i class="fas fa-edit"></i>
                          </button>
                          <button class="btn btn-danger btn-sm">
                            <i class="fas fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>4</td>
                      <td>Student</td>
                      <td><span class="badge bg-success">Active</span></td>
                      <td>
                        <div class="d-flex gap-2">
                          <button class="btn btn-warning btn-sm">
                            <i class="fas fa-edit"></i>
                          </button>
                          <button class="btn btn-danger btn-sm">
                            <i class="fas fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>5</td>
                      <td>Guest</td>
                      <td><span class="badge bg-success">Active</span></td>
                      <td>
                        <div class="d-flex gap-2">
                          <button class="btn btn-warning btn-sm">
                            <i class="fas fa-edit"></i>
                          </button>
                          <button class="btn btn-danger btn-sm">
                            <i class="fas fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
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
    <script src="../js/scripts.js"></script>
  </body>
</html>
