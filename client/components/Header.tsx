function Header() {
  return (
    <>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="client/public/images/logo-no-background.png"
              alt="logo"
              className="logo"
            ></img>
            {/* Offcanvas navbar */}
          </a>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars fa-2xl"></i>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Design Your Fitness
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <form className="d-flex mt-3" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    YOUR PROFILE
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    YOUR ROUTINE
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        GENERATED ROUTINE
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        WORKOUT ARCHIVE
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        ADD WORKOUTS
                      </a>
                    </li>
                  </ul>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      WEIGHT TRACKER
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      PHOTOS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      CONTACT US
                    </a>
                  </li>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
