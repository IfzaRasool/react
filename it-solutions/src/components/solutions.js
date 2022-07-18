import React from 'react';
import videosolution from './images/video-1.jpg';

const Solutions = () => (
  <section className="container grid grid-two-columns solution-section">
    <div className="sol-left-sec">
      <h1 className="secondary-heading">Best IT-Solutions company near the world</h1>
      <p className="service-para">Laborum cillum adipisicing anim elit sunt. Nostrud id fugiat in mollit et magna deserunt laboris deserunt ut excepteur. Lorem Lorem in pariatur labore eu id sit amet excepteur aute. Id eu aliqua dolore sunt esse cillum duis duis ipsum quis cillum non aute officia. Elit minim pariatur adipisicing non duis magna proident cillum.</p>
      <div className="sol-btn">
        <button type="submit" className="btn"> Our Mission</button>
        <button type="submit" className="btn"> Our Vision</button>
        <button type="submit" className="btn"> Award Win</button>
      </div>
      <p className="service-para">Ipsum commodo in quis ipsum consectetur non dolor enim qui deserunt aliqua aliquip. Cupidatat ad fugiat ad ea sint eu ad cupidatat laboris exercitation deserunt officia nisi. Nostrud adipisicing qui consequat aliquip reprehenderit est magna consectetur nulla velit ex culpa aliqua. Reprehenderit sunt do elit irure eiusmod laborum do non aliquip est quis velit aliquip. Nisi deserunt non ex consequat ullamco nulla mollit amet enim incididunt ad minim officia. Deserunt culpa veniam laborum amet magna. Exercitation minim laborum do laborum pariatur et labore reprehenderit aliquip fugiat commodo officia.</p>
      <ul className="sol-list">
        <li className="sol-item">This is list item</li>
        <li className="sol-item">This is list item</li>
        <li className="sol-item">This is list item</li>
      </ul>
      <button type="submit" className="btn">Read More</button>
    </div>
    <div className="right-sec">
      <img src={videosolution} alt="solution-video" />
    </div>
  </section>
);

export default Solutions;
