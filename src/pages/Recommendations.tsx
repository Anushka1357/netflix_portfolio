import React, { useState } from 'react';
import './Recommendations.css';
import schoolPic from '../images/school.jpg';
import nocsiPic from '../images/nicsi.jpg';
import wdPic from '../images/wd.jpg';

interface Recommendation {
  name: string;
  position: string;
  date: string;
  profilePic: string;
  text: string[];
}

const recommendations: Recommendation[] = [
  {
    name: "Ms. Caren Tze Ping Kee",
    position: "Data Science Intern - Western Digital",
    date: "June 2025",
    profilePic: wdPic,
    text: [
      "📊 'Chetanya is a model team-player, she is collaborative, respectful and always open to feedback'",
      "⚡ 'Chetanya's dedication, positive attitude, curiosity and professionalism sets her apart as exceptional intern and promising data scientist.'"
    ]
  },
  {
    name: "Mr. S.K. Joshi",
    position: "Web Developer Intern - NICSI",
    date: "Jan 2023",
    profilePic: nocsiPic,
    text: [
      "💼 'During the NICSI internship, Chetanya contributed significantly to multiple modules of the ePanchayat Project, delivering high-quality code for front-end and back-end solutions.'",
      "🚀 'Her ability to adapt quickly, collaborate across teams, and innovate in web development was outstanding.'"
    ]
  },
  {
    name: "Mrs. Anjali Kaushik",
    position: "School Teacher",
    date: "June 2021",
    profilePic: schoolPic,
    text: [
      "✨ 'Chetanya has always been a dedicated and inquisitive student. Her enthusiasm for learning and proactive approach to problem-solving were evident in every project and assignment.'",
      "🌟 'I am confident that Chetanya will excel in any endeavor she choose and bring value to every team or organization.'"
    ]
  }
];

const Recommendations: React.FC = () => {
  const [expandedImg, setExpandedImg] = useState<string | null>(null);

  return (
    <div className='recommendations-container'>
      <h2 className="recommendations-title"> Recommendations</h2>
      <div className="recommendations-grid">
        {recommendations.map((rec, index) => (
          <div 
            key={index} 
            className="recommendation-card"
            onClick={() => setExpandedImg(rec.profilePic)} // expand image when card clicked
          >
            <div className="recommendation-header">
              <img src={rec.profilePic} alt={rec.name} className="profile-pic" />
              <div>
                <h3>{rec.name}</h3>
                <p>{rec.position}</p>
                <p className="date">{rec.date}</p>
              </div>
            </div>
            <div className="recommendation-body">
              {rec.text.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {expandedImg && (
        <div className="image-modal" onClick={() => setExpandedImg(null)}>
          <img src={expandedImg} alt="Expanded" className="expanded-img" />
        </div>
      )}
    </div>
  );
};

export default Recommendations;
