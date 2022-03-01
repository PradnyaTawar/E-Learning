import React from "react";
import img2 from "../Assets/teacher.jpg";
import Navbar from '../Navbar';

const Signin = () => {
  return (
    <div>
      <Navbar/>
      <div className="heading h-36-semi color-primary ">Sign In</div>
      <div className="signin">
        <div className="signin-img">
          <img className="img" alt="img" height="400" src={img2} />
        </div>
        <div className="sign-in-form">
          <div className="input-div">
            <label class="input-label h-20-semi  "> Username</label>
            <input
              type="text"
              className="input-text-box color-primary h-20-bold "
            ></input>
          </div>

          <div className="input-div">
            <label class="input-label h-20-semi  "> Password</label>
            <input
              type="text"
              className="input-text-box  color-primary h-20-bold"
            ></input>
          </div>
          <div className="signin-btn-div">
            <button
              type="button"
              className="secondary-btn  color-pure   h-20-semi "
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
