import React from 'react'
import TeacherSidebar from './TeacherSidebar'
import Titlecontainer from "../Containers/title-container.jsx"
import img2 from "../Assets/class1.jpg";

const TeacherProfile = () => {
  return (
    <div>
       <Titlecontainer title="Teachers Profile"/>
       <div className="signin">
        <div className="signin-img">
          <img className="img" alt="img" height="500" width="500" src={img2} />
        </div>
        <div className="sign-in-form">
          <div className="input-div">
            <label class="input-label h-20-semi color-primary  "> Username</label>
            <label class="input-label h-30-semi  "> Username</label>
          </div>

          <div className="input-div">
            <label class="input-label h-20-semi color-primary   "> Password</label>
            <label class="input-label h-30-semi  "> Username</label>

          </div>
          <div className="input-div">
            <label class="input-label h-20-semi color-primary  "> Password</label>
            <label class="input-label h-30-semi  "> Username</label>

          </div>
          <div className="input-div">
            <label class="input-label h-20-semi color-primary  "> Password</label>
            <label class="input-label h-30-semi  "> Username</label>

          </div>
         
        </div>
      </div>
    </div>
  )
}

export default TeacherProfile