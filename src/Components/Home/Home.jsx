import React from "react";
import img2 from "../Assets/class.jpg";
import "./Home.scss";
import Navbar from "../Navbar";
import img3 from "../Assets/Frame.svg";
import Footercontainer from "../Containers/footer.jsx"

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home-form">
          <div className="home-div">
            <div class=" h-36-bold"> Grow your skills.</div>
          </div>
          <div className="home-div">
            <div class=" just-center  color-text h-20-semi  ">
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
        <div className="heading h-36-bold color-text">
          Why You Need E-Lerning?
        </div>
        <div className="heading-desc color-text ">
          <p className="text-just h-20-semi">
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
            plethora of benefits to your organizations. Let???s discuss some of
            the benefits of using an LMS system for corporate training below.
          </p>
        </div>
      </div>
      <div className="home-content-2 input-text-box-white">
        <div className="home">
          <div className="home-form">
            <div className="home-div">
              <div class="  h-20-bold">It saves time and cost</div>
            </div>
            <div className="home-div">
              <div class=" just-center   h-20-semi  ">
                {" "}
                Companies are investing a tremendous amount of money in
                conducting training programs for their employees. With the use
                of a corporate LMS, you can save a tremendous amount of your L&D
                budget. It improves the training effectiveness and reduces the
                cost, which results in better ROI. It increases the
                profitability and productivity of your organization.
              </div>
            </div>
            <div className="signin-btn-div">
              <button
                type="button"
                className="secondary-btn  color-pure   h-20-semi "
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
      </div>
      <div className="home-content-3">
        <div className="home">
          <div className="signin-img">
            <img className="img" alt="img" height="400" src={img2} />
          </div>
          <div className="home-form">
            <div className="home-div">
              <div class=" h-20-bold">Digital Learning Solutions</div>
            </div>
            <div className="home-div">
              <div class=" just-center   h-20-semi  ">
                {" "}
                LHT creates custom, digital learning solutions that are
                personalized to your business challenges. We work with you to
                discover your true learning needs. Then our unique design-pods
                create training solutions to engage your audience and drive
                neural connections.
              </div>
            </div>
            <div className="signin-btn-div">
              <button
                type="button"
                className="secondary-btn  color-pure   h-20-semi "
              >
                <a className="color-pure" href="/signup">
                  Start Your Free Coures
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-content-2 input-text-box-white">
        <div className="home">
          <div className="home-form">
            <div className="home-div ">
              <div class=" h-20-bold">Custom Online Training and Elearning</div>
            </div>
            <div className="home-div">
              <div class=" just-center   h-20-semi  ">
                {" "}
                Innovative learning experiences designed to drive behavior
                change to be dispersed when and where they need it. Several
                levels of custom training are available on your unique business
                needs.
              </div>
            </div>
            <div className="signin-btn-div">
              <button
                type="button"
                className="secondary-btn  color-pure   h-20-semi "
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
      </div>
     < Footercontainer />
    </div>
  );
};

export default Home;
