// queries/getCertifications.ts
import { Certification } from '../types';

// Local certifications stored in /public/certifications
// Example: public/certifications/database_learner.pdf
export async function getCertifications(): Promise<Certification[]> {
  return [
    {
      title: "Database Learner",
      issuer: "Oracle Academy",
      issuedDate: "July 2023",
      link: "/certifications/database_learner.pdf", // PDF stored locally
      iconName: "Oracle",
    },
    {
      title: "Introduction to C++",
      issuer: " NPTEL",
      issuedDate: "May 2022",
      link: "/certifications/cpp_intro.JPG",
      iconName: "code",
    },
    {
      title: "Data Science at Scale",
      issuer: "University of Washington (Coursera)",
      issuedDate: "Nov 2024",
      link: "/certifications/datascience_at_scale.pdf",
      iconName: "coursera",
    },
    {
      title: "Machine Learning with AI training",
      issuer: "National Institute of Skill Development, Internshala",
      issuedDate: "August 2023",
      link: "/certifications/python_datascience.pdf",
      iconName: "university",
    },
    {
      title: "AI for Entrepreneurship",
      issuer: "Intel Technology India, Skill India Digital Hub",
      issuedDate: "March 2025",
      link: "/certifications/ai_entrepreneurship.pdf",
      iconName: "university",
    },
    
    {
      title: "Data Science",
      issuer: "Teachnook",
      issuedDate: "Sep 2023",
      link: "/certifications/teachnook.pdf",
      iconName: "university",
    }
  ];
}
