import React from 'react';
import HeroSection from './HeroSection';
import Highlights from './Highlights';
import Testimonials from './Testimonials';

const Main = () => {
  return (
    <main>
      {/* <section>
        <h2>Welcome to your React project!</h2>
      </section> */}
      <HeroSection/>
      <Highlights/>
      <Testimonials/>
    </main>
  );
};

export default Main;
