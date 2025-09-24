import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';


import Skills from '../images/Skills1.jpeg';
import Experience from '../images/Experience.jpeg';
import Certifications from '../images/Certifications.jpeg';
import Projects from '../images/Projects.jpg';


type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';

interface TopPicksRowProps {
  profile: ProfileType;
}

const topPicksConfig = {
  recruiter: [
    { title: "Skills", imgSrc: Skills, route: "/Skills" },
    { title: "Experience and Education", imgSrc: Experience, route: "/work-experience" },
    { title: "Projects", imgSrc: Projects,  route: "/Projects" },
    { title: "Certifications", imgSrc: Certifications,  route: "/Certifications" },
  ],
  developer: [
    { title: "Skills", imgSrc: Skills,  route: "/Skills" },
    { title: "Experience and Education", imgSrc: Experience,  route: "/Experience" },
    { title: "Projects", imgSrc: Projects,  route: "/Projects" },
    { title: "Certifications", imgSrc: Certifications,  route: "/Certifications" },
  ],

  stalker: [
    { title: "Skills", imgSrc: Skills,  route: "/Skills" },
    { title: "Experience and Education", imgSrc: Experience,  route: "/Experience" },
    { title: "Projects", imgSrc: Projects,  route: "/Projects" },
    { title: "Certifications", imgSrc: Certifications,  route: "/Certifications" },
  ],
  adventure: [
    { title: "Skills", imgSrc: Skills, route: "/Skills" },
    { title: "Experience and Education", imgSrc: Experience,  route: "/Experience" },
    { title: "Projects", imgSrc: Projects,  route: "/Projects" },
    { title: "Certifications", imgSrc: Certifications,  route: "/Certifications" },
  ]
};


const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for {profile}</h2>
      <div className="card-row">
      {topPicks.map((pick, index) => (
          <div 
            key={index} 
            className="pick-card" 
            onClick={() => navigate(pick.route)}
            style={{ animationDelay: `${index * 0.2}s` }} // Adding delay based on index
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;
