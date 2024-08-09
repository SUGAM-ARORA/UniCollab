
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import homeIcon from '../img/homeicon.png';
import axios from 'axios';
import './Contributors.css';
import { color, motion } from "framer-motion";

function Contributors() {
  const [contributors, setContributors] = useState([]);
  const eventVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };
  useEffect(() => {
    async function fetchContributors() {
      try {
        const response = await axios.get(
          'https://api.github.com/repos/SUGAM-ARORA/UniCollab/contributors'
        );
        setContributors(response.data);
      } catch (error) {
        console.error('Error in fetching contributors:', error);
      }
    }
    fetchContributors();
  }, []);

  return (
    <div className="contributors-container">
      <h1 className="contributors-title">Our Contributors</h1>
      <Link to="/">
          <img src={homeIcon} alt="Home" className="home-icon" style={{ marginTop: '2px' }} />
        </Link>
      <div className="contributors-grid">
        {contributors.map((contributor) => (
          <motion.div  initial="hidden"
          whileInView="visible"
          whileHover={{ scale: 1.06 }}
          viewport={{ once: true }}
          variants={eventVariants}
          transition={{ duration: 0.2, ease: "easeInOut" }} key={contributor.id} className="contributor-card">
            <a
              href={contributor.html_url}
              className="contributor-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={contributor.avatar_url}
                alt={contributor.login}
                className="contributor-avatar"
              />
            </a>
            <h2 className="contributor-name">{contributor.login}</h2>
            <p className="contributor-contributions">
              Contributions: {contributor.contributions}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Contributors;
