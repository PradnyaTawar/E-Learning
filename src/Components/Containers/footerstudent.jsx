import React from "react";
import img3 from "../Assets/Frame.svg";

const Footercontainer = () => {
  return (
    <div>
     <div className="home-footer just-center ">
        <div className="footer color-background  h-16-bold ">
          <h4 className="color-pure">COMPANY</h4>
          <p>About</p>
          <p>Careers</p>
        </div>
        <div className="footer color-background  h-16-bold ">
          <h4 className="color-pure">SERVICES</h4>
          <p>Courses</p>
         
        </div>
        
        <div className="footer color-background h-16-bold">
          <h4 className="color-pure">(925)-281-7375
</h4>
          <p>contact@elearnng.com</p>
          <p>
Pune, India</p>
        </div>

        <div className="footer color-background h-20-bold">
          <div className="navbar-logo d-flex-ac  ">
            <img className="img" alt="img" width="30" src={img3} />
            <h1 className="color-pure h-20-bold">
              <a className="color-pure" href="/studentlandingpage">
                E-Learning
              </a>
            </h1>
          </div>
        </div>
      </div>
      <div className="footerat h-16-semi">
        <p>© 2022 E-Learning</p>
      </div>
    </div>
  );
};
export default  Footercontainer ;
