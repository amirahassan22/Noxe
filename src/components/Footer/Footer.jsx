import React from "react";
import { Link } from "react-router-dom";
import footerStyles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className="py-5 position-relative mt-5">
        <div
          className={`${footerStyles.rightsideInfo} text-center position-absolute translate-middle-x rounded-pill`}
        >
          <h2 className="logo">Noxe</h2>
          <p>
            Collect, curate, and share. Lists are the perfect way to group
            films.
          </p>
        </div>
        <div className="container pt-4">
          <div className="row pt-5">
            <div className="col-md-3">
              <div className={`${footerStyles.rightsideFooter}`}>
                <div className=''>
                  <h4>About Us</h4>
                  <p>
                    Write and share reviews. Compile your own lists. Share your
                    life in film.
                  </p>
                </div>
                <div className={`${footerStyles.footerContact} pt-4`}>
                  <h5 className="pb-2">Contact Us</h5>
                  <p>
                    <i className="fa-solid fa-phone"></i>{" "}
                    <span>+7487 847 845</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-envelope"></i>{" "}
                    <span>user@email.com</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-information">
                <h4>Information</h4>
                <ul>
                  <li>
                    <Link to="#">About us</Link>
                  </li>
                  <li>
                    <Link to="#">More Search</Link>
                  </li>
                  <li>
                    <Link to="#">Podcasts</Link>
                  </li>
                  <li>
                    <Link to="#">News</Link>
                  </li>
                  <li>
                    <Link to="#">Events</Link>
                  </li>
                  <li>
                    <Link to="#">API</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="helpful-links">
                <h4>Helpful Links</h4>
                <ul>
                  <li>
                    <Link to="#">Help</Link>
                  </li>
                  <li>
                    <Link to="#">Terms</Link>
                  </li>
                  <li>
                    <Link to="#">privacy policy</Link>
                  </li>
                  <li>
                    <Link to="#">Services</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="subscribe pt-5">
                <h5 className="pb-3">Subscribe More Info</h5>
                <div className={`${footerStyles.subField} position-relative`}>
                  <input
                    type="email"
                    className="form-control rounded-pill"
                    placeholder="Enter Your Email"
                  />
                  <i className="fa-solid fa-envelope-open-text position-absolute translate-middle-y"></i>
                </div>
                <button className={`btn mt-3 ${footerStyles.subBtn}`}>Subscribe</button>
                <div className={`d-flex justify-content-center align-items-center ${footerStyles.socialIcons} pt-4`}>
            <ul className="d-flex">
                <li>
                    <Link to='#'><i className="fa-brands fa-facebook-f"></i></Link>
                </li>
                <li>
                    <Link to='#'><i className="fa-brands fa-instagram"></i></Link>
                </li>
                <li>
                    <Link to='#'><i className="fa-brands fa-twitter"></i></Link>
                </li>
                <li>
                    <Link to='#'><i className="fa-brands fa-reddit-alien"></i></Link>
                </li>
            </ul>
          </div>
              </div>
            </div>
          </div>
          {/* <div className={footerStyles.line}></div> */}
          
        </div>
      </footer>
    </>
  );
}
