import React, { useState } from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import { ProfileBanner as ProfileBannerType } from '../types';

const ProfileBanner: React.FC = () => {

  // Hardcoded banner data
  const [bannerData] = useState<ProfileBannerType>({
    backgroundImage: { url: "https://example.com/your-bg-image.jpg" },
    headline: "Aspiring Data Scientist & AI Engineer",
    resumeLink: { url: "/resume.pdf" }, // <-- use PDF from public folder
    linkedinLink: "https://www.linkedin.com/in/chetanya-gupta-996413233/",
    profileSummary: "Data Science and Generative AI enthusiast with hands-on experience in LLMs, RAG, and vector databases. Skilled in Python, LangChain, data analysis and prompt engineering, with a proven track record of building scalable AI pipelines. Adept at transforming data into actionable insights through automation and advanced analytics."
  });

  const handlePlayClick = () => {
    // Opens the local PDF in a new tab
    window.open(bannerData.resumeLink.url, '_blank');
  };

  const handleLinkedinClick = () => { 
    window.open(bannerData.linkedinLink, '_blank');
  }

  return (
    <div className="profile-banner" style={{ backgroundImage: `url(${bannerData.backgroundImage.url})` }}>
      <div className="banner-content">
        <h1 className="banner-headline" id='headline'>{bannerData.headline}</h1>
        <p className="banner-description">
          {bannerData.profileSummary}
        </p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="LinkedIn" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
