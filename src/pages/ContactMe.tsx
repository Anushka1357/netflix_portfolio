import React from 'react';
import './ContactMe.css';
import maybePic from '../images/Chetu.jpeg';
import { FaEnvelope, FaPhoneAlt, FaBirthdayCake, FaGlobe } from 'react-icons/fa';

const ContactMe: React.FC = () => {
  return (
    <div className="contact-container">
      {/* maybe Card in Center */}
      <a
        href="https://www.linkedin.com/in/chetanya-gupta-996413233/"
        target="_blank"
        rel="noopener noreferrer"
        className="maybe-card"
      >
        {/* Left Side - Image */}
        <div className="maybe-left">
          <img src={maybePic} alt="Chetanya Gupta" className="maybe-photo" />
        </div>

        {/* Right Side - Info */}
        <div className="maybe-right">
          <h2 className="maybe-name">Chetanya Gupta</h2>
          <p className="maybe-title">Data Science Intern | Aspiring AI Engineer</p>
          <p className="maybe-summary">
            Passionate about machine learning, generative AI, and building data-driven solutions.
          </p>
          <button className="linkedin-btn">View LinkedIn maybe</button>
        </div>
      </a>

      {/* Second Row: Details */}
      <div className="details-grid">
        <div className="detail-card">
          <FaEnvelope className="detail-icon" />
          <span>chetanya2003@gmail.com</span>
        </div>
        <div className="detail-card">
          <FaPhoneAlt className="detail-icon" />
          <span>+91 8700897723</span>
        </div>
        <div className="detail-card">
          <FaBirthdayCake className="detail-icon" />
          <span>7th March 2003</span>
        </div>
        <div className="detail-card">
          <FaGlobe className="detail-icon" />
          <span>English, Hindi</span>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
