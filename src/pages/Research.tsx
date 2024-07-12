// Research.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Research.css';
const dataCentric  = "https://res.cloudinary.com/dqjycckyb/image/upload/v1720823146/ce7c6klrf5jbd7g6x2df.gif";
const ssaImage =  "https://res.cloudinary.com/dqjycckyb/image/upload/v1720823146/ejxmicj4nhlgzz7dz4sq.gif";
import privacyImage from "../assets/content/Research/privacy.webp"

const Research: React.FC = () => {

  return (
    <div className="research-page">
      <header className="research-header">
        <h1 className="h2">Research</h1>
      </header>
      <article className="research-content">
        <p>
          Our mission is to develop theoretical foundations and practical algorithms for responsible AI.
          Our group focuses on establishing a formal understanding of data's impact on machine learning outcomes
          and co-designing data and learning algorithms to build sample-efficient, safe, human-aligned AI systems.
          To realize this vision, we conduct interdisciplinary research that integrates insights from machine learning,
          game theory, optimization, statistics, and social science.
        </p>
        <table className="research-bubble">
          <tbody>
            <tr>
              <td className="rb-img">
                <img src={dataCentric} alt="Data-Centric AI" />
              </td>
              <td className="rb-text">
                <Link to="/research/data-centric-ai">Better Data, Better Models</Link>
              </td>
            </tr>
            <tr>
              <td className="rb-img">
                 <img src={ssaImage} alt="Safety, Security, and Alignment" />
              </td>
              <td className="rb-text">
                <Link to="/research/safety-security-alignment">Safety, Security, and Alignment</Link>
              </td>
            </tr>
            <tr>
              <td className="rb-img">
                <img src={privacyImage} alt="Privacy" />
              </td>
              <td className="rb-text">
                <Link to="/research/privacy">Privacy Risk Assessment</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </div>
  );
};

export default Research;
