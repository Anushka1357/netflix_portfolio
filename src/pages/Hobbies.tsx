import React from 'react';
import './Hobbies.css';

// Hobby images
import basketballImg from '../images/basketball.jpg';
import travelImg from '../images/travel.jpg';
import readingImg from '../images/reading.jpeg';
import modellingImg from '../images/modelling.png';

// Achievement images
import taekwondoImg from '../images/taekwondo.jpeg';
import universityImg from '../images/university.jpg';

// Social Impact images
import womenEmpowermentImg from '../images/women.png';
import ecoImg from '../images/eco.jpeg';

const achievements = [
  { title: "🥋 Taekwondo Black Belt", imgSrc: taekwondoImg },
  { title: "🎓 Top Performer in University (Aptitude & English Skills)", imgSrc: universityImg },
];

const socialImpact = [
  { title: "🌍 Rural Women Empowerment Program (1 semester)", imgSrc: womenEmpowermentImg },
  { title: "♻️ Waste Segregation Awareness (Eco Sawera)", imgSrc: ecoImg },
];

const hobbies = [
  { title: "Basketball", imgSrc: basketballImg },
  { title: "Travelling", imgSrc: travelImg },
  { title: "Reading", imgSrc: readingImg },
  { title: "Modelling", imgSrc: modellingImg }
];

const Hobbies: React.FC = () => {
  return (
    <div className="hobbies-page">
      <h2 className="hobbies-title">Beyond Work</h2>
      <p className="quote">“Achievements show discipline, impact shows values, hobbies show passion.”</p>

      {/* Achievements & Impact side by side */}
      <div className="albums-wrapper">
        <div className="albums-section">
          <h3>🎖️ Achievements</h3>
          <div className="albums">
            {achievements.map((item, index) => (
              <div key={index} className="album-card" style={{ animationDelay: `${index * 0.2}s` }}>
                <img src={item.imgSrc} alt={item.title} className="album-image" />
                <div className="album-details">
                  <h4>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="albums-section">
          <h3>🌍 Social Impact</h3>
          <div className="albums">
            {socialImpact.map((item, index) => (
              <div key={index} className="album-card" style={{ animationDelay: `${index * 0.2}s` }}>
                <img src={item.imgSrc} alt={item.title} className="album-image" />
                <div className="album-details">
                  <h4>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hobbies full row */}
      <div className="albums-section">
        <h3>🎨 Hobbies</h3>
        <div className="albums">
          {hobbies.map((hobby, index) => (
            <div key={index} className="album-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <img src={hobby.imgSrc} alt={hobby.title} className="album-image" />
              <div className="album-details">
                <h4>{hobby.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
