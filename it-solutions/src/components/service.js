import React from 'react';
import service from './images/consult.png';
import multifunction from './images/engineering.png';
import security from './images/computing.png';

const Service = () => (
  <div>
    <section className="section-services">
      <h1 className="secondary-heading">World best IT-Services we provide</h1>
      <div className="container grid grid-three-columns">
        <div className="card service-card">
          <img src={service} alt="it services" />
          <h1>Multi function services</h1>
          <p className="service-para">
            Lorem ipsum dolor amet consectetur adipisicing sed do eiusmod tempor
            incididunt ut labore.
          </p>
        </div>
        <div className="card service-card">
          <img src={multifunction} alt="multifunction" />
          <h1>Cyber Security</h1>
          <p className="service-para">
            Lorem ipsum dolor amet consectetur adipisicing sed do eiusmod tempor
            incididunt ut labore.
          </p>
        </div>
        <div className="card service-card">
          <img src={security} alt="cyber security" />
          <h1>Managed IT services</h1>
          <p className="service-para">
            Lorem ipsum dolor amet consectetur adipisicing sed do eiusmod tempor
            incididunt ut labore.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default Service;
