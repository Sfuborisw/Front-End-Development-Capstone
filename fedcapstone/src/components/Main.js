import React from 'react';
import HeroSection from './HeroSection';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';
import BookingPage from './BookingPage';

const Main = () => {
  return (
    <main>
      {/* <section>
        <h2>Welcome to your React project!</h2>
      </section> */}
      <HeroSection/>
      <Highlights/>
      <BookingPage/>
      <Testimonials/>
      <About/>
    </main>
  );
};

export default Main;
