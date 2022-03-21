import React, { useEffect, useState } from "react";
import img2 from "../Assets/teacher.jpg";
import Navbar from "../Navbar";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const TeacherSignin = () => {
  const [user, setUser] = useState({
    username: "",
    password: "" 
  });
  const handleChange = e => {
    const { name, value} = e.target
    // console.log(e.target)
    setUser({
        ...user,
        [name] : value
    })
 
  }

  const redirect = useNavigate() 

  const onSubmit = async() => {
    // alert("login done ");
    console.log(user);
    const data = await axios.get(`http://localhost:4000/Teachersignin/${user.username}/${user.password}`)
    console.log(data.data)
    
    if (data.data.status === 200) {
        redirect  ("/studentlandingpage")    
    // alert("Success")
    }else{
      alert("failed")
  }
}
  return (
    <div>
      <Navbar />
      <div className="heading h-36-semi color-primary ">Teacher Sign In</div>
      <div className="signin">
      {console.log("User",  user)}
        <div className="signin-img">
          <img className="img" alt="img" height="400" src={img2} />
        </div>
        <div className="sign-in-form">
          <div className="input-div">
            <label class="input-label h-20-semi  "> Username</label>
            <input
              type="text"
              className="input-text-box color-primary h-20-bold "
              name="username"
              value={user.username}
              onChange={(e) =>handleChange(e) }
            ></input>
          </div>

          <div className="input-div">
            <label class="input-label h-20-semi  "> Password</label>
            <input
              type="text"
              className="input-text-box  color-primary h-20-bold"
              name="password"
              value={user.password}
              onChange={(e) =>handleChange(e) }
            ></input>
          </div>
          <div className="signin-btn-div">
            <button
              type="button"
              className="secondary-btn color-pure   h-20-semi "
              onClick={onSubmit}
            >
                 Sign in
              {/* <a className="color-pure" href="/teacherlandingpage ">
             
              </a> */}
            </button>
          </div>
          <div className="heading h-20-semi color-primary ">
            {" "}
            New User, Lets <a href="/signup ">Sign Un</a> !
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherSignin;
