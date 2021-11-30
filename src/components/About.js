import React from "react";

function About({ aboutImgMob, aboutImgDesk }) {
  return (
    <section id='about'>
      <div className='about__container'>
        <div className='about__img'>
          <img src={aboutImgMob} alt='' />
        </div>
        <div className='about__content'>
          <h3>the leader in interactive vr</h3>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bing to their brand
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
