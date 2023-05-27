import React from "react";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#1b1b1e" }}>
      <div className="container-fluid">
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
          <form className="d-flex w-75 ">
            <input
              className="form-control me-2 w-100 border-0 rounded-pill"
              type="search"
              style={{ backgroundColor: "#101014" }}
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <div className="d-flex justify-items-end">
            <button className="btn btn-dark me-2 border-1 border-light bg-none">Login</button>
            <button className="btn btn-dark" style={{ background: "#12c79a" }}>
              Create Account
            </button>
          </div>{" "}
        </div>
      </div>
    </nav>
  );
};

export default Header;
