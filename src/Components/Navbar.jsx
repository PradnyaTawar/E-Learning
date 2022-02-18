import React from 'react'
import "./SCSS/main-scss.scss";
import "./Navbar.scss"
const Navbar = () => {
  return (
    <div>
        <div className="navbar d-flex-ac">
            <div className="navbar-logo">
                <h1 className="color-pure h-20-bold">E-Learning</h1>
            </div>
                <div className="login-btn-div">

                <button type="button" className="primary-btn color-primary h-20-bold ">
                    Sign in
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar