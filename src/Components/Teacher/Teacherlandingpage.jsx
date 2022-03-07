import React from "react";
import Navbar from "../Containers/Navbar-student.jsx";
import img2 from "../Assets/class.jpg";
import StudentCourses from "../Containers/Student-courses.jsx";

const Teacherlandingpage = () => {
  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="home-form">
          <div className="home-div">
            <div class=" h-36-bold"> Grow your skills.</div>
          </div>
          <div className="home-div">
            <div class=" just-center   h-20-semi  ">
              {" "}
              Learn in-demand skills with over 16,000+ online courses taught by
              real-world professionals.
            </div>
          </div>
          <div className="signin-btn-div">
            <button
              type="button"
              className="secondary-btn  color-pure  h-20-semi "
            >
              <a className="color-pure" href="/signup">
                Start Your Free Coures
              </a>
            </button>
          </div>
        </div>
        <div className="signin-img">
          <img className="img" alt="img" height="400" src={img2} />
        </div>
      </div>
      <div className="home-content-1" style={{ padding: "0 40px" }}>
        <div className="heading h-36-semi color-text ">
          Why You Need E-Lerning?
        </div>
        <div className="heading-desc color-text ">
          <p className="tex-just h-20-semi">
            Today most organizations need an automated learning process to train
            their employee as it the most convenient way. Corporate LMS systems
            allow you to deliver hassle-free online training to your employees,
            partners, and customers. Corporate training software helps your
            organization train employees better and engage them to take a more
            active role. Selection of the Best LMS for corporate training can
            give you the desired result and help you achieve your goals. A
            one-stop solution, Paradiso LMS for corporate training can meet all
            customized needs, and training programs include onboarding,
            compliance training, product training, specific skill development
            training, and more. The best corporate LMS software can provide a
            plethora of benefits to your organizations. Let’s discuss some of
            the benefits of using an LMS system for corporate training below.
          </p>
        </div>
      </div>
      <div className="student-list">
        <StudentCourses />
        <StudentCourses />
        <StudentCourses />
        <StudentCourses /> <StudentCourses /> <StudentCourses />
      </div>
    </div>
  );
};

export default Teacherlandingpage;
