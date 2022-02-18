import React from 'react'

const Signin = () => {
  return (
    <div>
        <div className="heading h-36-semi color-primary ">Sign In</div>
        <div className="signin">
            <div className="signin-img">
            </div>
          <div className="input-text-box">
        <div className="input-text">
            <label class="label-signin h-20-semi  "> Username</label>
            <input type="text" className="text-box"></input>
            </div>
       
        <div className="input-text">
            <label class="label-signin h-20-semi "> Password</label>
            <input type="text" className="text-box"></input>
        </div>
        </div>
        </div>
        </div>
  )
}

export default Signin