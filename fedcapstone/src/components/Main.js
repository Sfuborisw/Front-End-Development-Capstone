import React from 'react';
import HeroSection from './HeroSection';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';

const Main = () => {
  return (
    <main>
      {/* <section>
        <h2>Welcome to your React project!</h2>
      </section> */}
      <HeroSection/>
      <Highlights/>
      <Testimonials/>
      <About/>
    </main>
  );
};

export default Main;
