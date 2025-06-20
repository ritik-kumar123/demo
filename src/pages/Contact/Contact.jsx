import React, { useLayoutEffect, useRef } from "react";
import "./Contact.css";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Left Image animation
      gsap.from(".card1", {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".card1",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Right Form animation
      gsap.from(".card2", {
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".card2",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, contactRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div className="contact mb-5" id="contactpage" ref={contactRef}>
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase main-heading">
        Contact
      </h2>
      <hr />

      <div className="card card0 border-0">
        <div className="row">
          {/* Left Side Image */}
          <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
            <div className="card1">
              <div className="row border-line">
                <img
                  src="https://www.meshini.com/themes/meshini-v3/assets/img/icons/contact_us.png"
                  alt="Contact"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
            <div className="card2 d-flex card border-0 px-4 py-5">
              <h6 className="mb-4 text-center">
                CONTACT WITH{" "}
                <BsLinkedin className="ms-2" color="blue" size={30} />
                <BsGithub className="ms-2" color="blue" size={30} />
                <BsFacebook className="ms-2" color="blue" size={30} />
              </h6>

              {/* OR Divider */}
              <div className="row px-3 mb-4 align-items-center">
                <div className="col line"></div>
                <div className="col-auto">
                  <small className="or text-center">OR</small>
                </div>
                <div className="col line"></div>
              </div>

              {/* Form Inputs */}
              <div className="row px-3 mb-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  className="form-control"
                />
              </div>
              <div className="row px-3 mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className="form-control"
                />
              </div>
              <div className="row px-3 mb-3">
                <textarea
                  name="msg"
                  placeholder="Enter Message"
                  className="form-control"
                  rows="4"
                />
              </div>

              {/* Submit Button */}
              <div className="row px-3">
                <button className="btn btn-secondary" type="submit">
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
