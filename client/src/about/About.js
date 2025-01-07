// About.js
import React, { useState, useEffect, useRef } from 'react';
import './About.css';

/* Pictures */
import aboutImage1 from './pictures/picture1.png';
import aboutImage2 from './pictures/picture2.png';

const About = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const [isSection1Visible, setIsSection1Visible] = useState(false);
  const [isSection2Visible, setIsSection2Visible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (entry.target === section1Ref.current) {
            setIsSection1Visible(true);
          } else if (entry.target === section2Ref.current) {
            setIsSection2Visible(true);
          }
        } else {
          if (entry.target === section1Ref.current) {
            setIsSection1Visible(false);
          } else if (entry.target === section2Ref.current) {
            setIsSection2Visible(false);
          }
        }
      },
      { threshold: 0.3 }
    );

    if (section1Ref.current) observer.observe(section1Ref.current);
    if (section2Ref.current) observer.observe(section2Ref.current);

    return () => {
      if (section1Ref.current) observer.unobserve(section1Ref.current);
      if (section2Ref.current) observer.unobserve(section2Ref.current);
    };
  }, []);

  return (
    <div className="about-page">
      <div className="about-section">
        <div
          ref={section1Ref}
          className={`section-row ${isSection1Visible ? 'animate' : ''}`}
        >
          <img src={aboutImage1} alt="About 1" className="image" />
          <div className="text">
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide a professional and enjoyable basketball
              experience, helping players of all skill levels improve their
              game while promoting teamwork and sportsmanship.
            </p>
          </div>
        </div>

        <div
          ref={section2Ref}
          className={`section-row reverse ${isSection2Visible ? 'animate' : ''}`}
        >
          <div className="text">
            <h2>What We Offer</h2>
            <p>
              We offer personalized training programs, clinics, and competitive
              events that cater to both beginners and advanced players. Our
              experienced coaches will help you reach your full potential.
            </p>
          </div>
          <img src={aboutImage2} alt="About 2" className="image" />
        </div>
      </div>
    </div>
  );
};

export default About;
