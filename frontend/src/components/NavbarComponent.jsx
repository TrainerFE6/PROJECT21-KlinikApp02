const NavbarComponent = () => {
  return (
    <div>
     <div
    className="container-fluid bg-white p-0 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="row gx-0 d-none d-lg-flex">
      <div className="col-lg-7 px-5 text-start">
        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
          <small className="fa fa-map-marker-alt text-primary me-2" />
          <small>Kalisombo Street No 18, Salatiga, Central Java</small>
        </div>
        <div className="h-100 d-inline-flex align-items-center py-3">
          <small className="far fa-clock text-primary me-2" />
          <small>Bussiness Hours: Mon-Fri 08.00AM-16.00PM</small>
        </div>
      </div>
      <div className="col-lg-5 px-5 text-end">
        <div className="h-100 d-inline-flex align-items-center">
          <a
            className="btn btn-sm-square rounded-circle bg-white text-primary me-1"
            href=""
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            className="btn btn-sm-square rounded-circle bg-white text-primary me-1"
            href=""
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            className="btn btn-sm-square rounded-circle bg-white text-primary me-1"
            href=""
          >
            <i className="fab fa-linkedin-in" />
          </a>
          <a
            className="btn btn-sm-square rounded-circle bg-white text-primary me-0"
            href=""
          >
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Topbar End */}
  {/* Navbar Start */}
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary p-0">
      <a
          href="index.html"
          class="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <h3 class="m-0 text-white">
            <i class="far fa-hospital me-3"></i>GHEALTH
          </h3>
        </a>
    <button
      type="button"
      className="navbar-toggler me-4"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto p-4 p-lg-0 gap-5 me-5">
        <a href="/" className="nav-item nav-link active">
          Home
        </a>
        <a href="#" className="nav-item nav-link">
            Doctor's Schedule
        </a>
        <a href="#" className="nav-item nav-link">
        About Us
        </a>
        <a href="#" className="nav-item nav-link">
        Customer Reviews
        </a>
      </div>
      <a
        href="" className="btn text-white btn-warning btn-appo border-0 rounded-0 py-4 px-lg-5 d-none d-lg-block"
      >
        LOGIN/REGIST
      </a>
    </div>
  </nav>
    </div>
  );
};

export default NavbarComponent;