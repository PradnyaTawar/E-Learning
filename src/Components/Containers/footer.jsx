import React from "react";
import img3 from "../Assets/Frame.svg";

const Footercontainer = () => {
  return (
    <div>
     <div className="home-footer just-center ">
        <div className="footer color-background h-20-bold ">
          <h2 className="color-pure">COMPANY</h2>
          <p>About</p>
          <p>Careers</p>
        </div>
        <div className="footer color-background h-20-bold ">
          <h2 className="color-pure">SERVICES</h2>
          <p>Courses</p>
         
        </div>
        
        <div className="footer color-background h-20-bold">
          <h2 className="color-pure">(925)-281-7375
</h2>
          <p>contact@elearnng.com</p>
          <p>
Pune, India</p>
        </div>

        <div className="footer color-background h-20-bold">
          <div className="navbar-logo d-flex-ac  ">
            <img className="img" alt="img" width="30" src={img3} />
            <h1 className="color-pure h-20-bold">
              <a className="color-pure" href="/">
                E-Learning
              </a>
            </h1>
          </div>
        </div>
      </div>
      <div className="footerat h-20-semi">
        <p>© 2022 E-Learning</p>
      </div>
    </div>
  );
};
export default  Footercontainer ;
