import React from 'react';
import banner from './images/banner-person-1.png';

const Home = () => (
  <section className="section section-hero">
    <div className="container grid grid-two-columns">
      <div className="heroData">
        <p className="para">We Provide IT services</p>
        <h1 className="primary-heading"> Best IT-Solutions near the world</h1>
        <p className="para">
          a margin is the space around an element border, while padding is the
          space between an element border and the element content.
          {' '}
        </p>
        <button className="btn hero-data-btn" type="submit">
          {' '}
          Learn more
        </button>
      </div>
      <div className="hero-image">
        <img src={banner} alt="banner-person" />
      </div>
    </div>
  </section>
);

export default Home;
