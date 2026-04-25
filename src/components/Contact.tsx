import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Let's Connect</h4>
            <p>
              <a href="https://linktr.ee/Kirtibehera" target="_blank" data-cursor="disable">
                Linktree
              </a>
            </p>
            <p>
              <a href="mailto:Connect@electrowander.online?subject=1:1Meeting&body=Hi Kirti," target="_blank" data-cursor="disable">
                Mail Me
              </a>
            </p>
            <h4>Education</h4>
            <p>
              <strong>MTech</strong> - Robotics & Mobility Systems<br />
              IIT Jodhpur
            </p>
            <p>
              <strong>BTech</strong> - Applied Electronics & Instrumentation<br />
              BPUT
            </p>
            <p>
              <strong>Diploma</strong> - Electronics & Telecommunication<br />
              SCTE & VT Odisha
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/KirtiBehera"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://o365forum.blogspot.com/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              O365 Forum (Blog) <MdArrowOutward />
            </a>
            <a
              href="https://sites.google.com/view/o365forum/home"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Google Sites (O365 Forum) <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/kirti-behera/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.youtube.com/@electrowander"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Electrowander (Blog) <MdArrowOutward />
            </a>
            <a
              href="https://www.youtube.com/@learngb2tb"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              LearnGB2TB (Technology Tutorials) <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed, Developed and Managed <br /> by <span>Kirti Ranjan Behera</span>
            </h2>
            <h5>
              <MdCopyright /> {new Date().getFullYear()} Electrowander <h4>All rights reserved.</h4>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
