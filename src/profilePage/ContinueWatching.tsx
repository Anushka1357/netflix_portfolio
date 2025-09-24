import React from 'react';
import { Link } from 'react-router-dom';
import './ContinueWatching.css';
// Import your local images
import HobbiesImg from '../images/Hobbies.jpeg';
import BlogsImg from '../images/Blogs.jpeg';
import CommunityEngagementImg from '../images/Recommendations.jpeg';
import AchievementsImg from '../images/AboutMe.jpg';


type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig = {
  recruiter: [
    { title: "Achievements & Interests ", imgSrc: HobbiesImg, link: "/hobbies" },
    { title: "Research & Writing", imgSrc: BlogsImg, link: "/blogs" },
    { title: "Recommendations", imgSrc: CommunityEngagementImg, link: "/Recommendations" },
    { title: "About Me", imgSrc: AchievementsImg, link: "/contact-me" }
  ],
  developer: [
    { title: "Achievements & Interests ", imgSrc: HobbiesImg, link: "/hobbies" },
    { title: "Research & Writing", imgSrc: BlogsImg, link: "/blogs" },
    { title: "Recommendations", imgSrc: CommunityEngagementImg, link: "/community" },
    { title: "About Me", imgSrc: AchievementsImg, link: "/contact-me" }
  ],
  stalker: [
    { title: "Achievements & Interests ", imgSrc: HobbiesImg, link: "/hobbies" },
    { title: "Research & Writing", imgSrc: BlogsImg, link: "/blogs" },
    { title: "Recommendations", imgSrc: CommunityEngagementImg, link: "/community" },
    { title: "About Me", imgSrc: AchievementsImg, link: "/contact-me" }
  ],
  adventure: [
    { title: "Achievements & Interests ", imgSrc: HobbiesImg, link: "/hobbies" },
    { title: "Research & Writing", imgSrc: BlogsImg, link: "/blogs" },
    { title: "Recommendations", imgSrc: CommunityEngagementImg, link: "/community" },
    { title: "About Me", imgSrc: AchievementsImg, link: "/contact-me" }
  ]
};


const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {profile}</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => (
          <Link to={pick.link} key={index} className="pick-card">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
