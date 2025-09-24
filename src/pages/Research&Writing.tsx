import React from 'react';
import './Research&Writing.css';
import { FaUniversity} from 'react-icons/fa';

const blogs = [
  {
    title: "Deep Learning Techniques For IoT",
    platform: "12th International Conference on Science and Innovative Engineering 2022 Proceeding",
    icon: <FaUniversity />,
    description: "This study reviews IoT use cases, analytical techniques, and open-source frameworks supporting efficient and secure IoT development.",
  },
];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">✍️ My Research & Writing</h2>
      <p className="blogs-intro">A collection of my research work and blogs on tech.</p>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="blog-icon animated-icon">{blog.icon}</div>
            <div className="blog-info animated-text">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <span className="blog-platform">{blog.platform}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
