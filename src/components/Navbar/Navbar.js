import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg mb-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://alamanfund.jo/static/media/logo.1668749d81a5f8627e57c1fa1f729863.svg"
            alt="Al Aman Fund"
          />
          <button type="button" className="navbar-donate__button">
            Donate
          </button>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                what we do
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                elegibity
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                our youth
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
                who we are
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Overview
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Get to Know Us
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Governance
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    strategic Partners
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                العربية
              </a>
            </li>
            <div>
              <img
                src="https://alamanfund.jo/static/media/logo.1668749d81a5f8627e57c1fa1f729863.svg"
                alt="Al Aman Fund"
              />
            </div>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                our impact
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
                get involved
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Volunteer
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Employ On Orphan
                  </a>
                </li>
              </ul>
            </li>
            <button
              type="button"
              className="navbar-donate__button"
              id="navbar-donate__button_second"
            >
              Donate
            </button>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}
