import React from "react";

const NavbarComponent = (props) => {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light flex-column justify-content-center">
      <div className="container row border-bottom py-2">
        {/* <div className="row"> */}
        <a className="col-2 text-center text-secondary ">Subscribe</a>
        <div className="col-8 fs-3 fw-bold text-decoration-underline">
          Large
        </div>
        <div className="col-2 d-flex justify-content-end align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search mx-3"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <button type="btn" className="btn btn-sm btn-outline-dark ml-2">
            Sign Up
          </button>
        </div>
        {/* </div> */}
      </div>
      <div className="container row py-2">
        <a className="col text-center text-secondary">World</a>
        <a className="col text-center text-secondary">U.S.</a>
        <a className="col text-center text-secondary">Technology</a>
        <a className="col text-center text-secondary">Design</a>
        <a className="col text-center text-secondary">Culture</a>
        <a className="col text-center text-secondary">Business</a>
        <a className="col text-center text-secondary">Politics</a>
        <a className="col text-center text-secondary">Opinion</a>
        <a className="col text-center text-secondary">Science</a>
        <a className="col text-center text-secondary">Health</a>
        <a className="col text-center text-secondary">Style</a>
        <a className="col text-center text-secondary">Travel</a>
      </div>
    </div>
  );
};

export default NavbarComponent;
