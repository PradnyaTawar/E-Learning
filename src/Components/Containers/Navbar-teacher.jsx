import React from "react";

import img2 from "../Assets/Frame.svg";

const NavbarTeacher = () => {
  return (
    <div>
      <div className="navbar d-flex-ac">
        <div className="navbar-logo d-flex-ac  ">
          <img className="img" alt="img" width="30" src={img2} />
          <h1 className="color-pure h-20-bold">
            <a className="color-pure" href="/">
              E-Learning
            </a>
          </h1>
        </div>
        <div className="d-flex-ac ">
          <h1 className="color-pure h-20-bold padding-right">
            <a className="color-pure" href="/studentdashboard">
              Profile
            </a>
          </h1>
          <div className="login-btn-div ">
            <button
              type="button"
              className="primary-btn color-primary h-20-semi "
            >
              <a className="color-primary h-20-bold" href="/home">Logout</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTeacher;
