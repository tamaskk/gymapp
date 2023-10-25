import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Courses from './components/Courses';
import Banner from './components/Banner';
import Coaches from './components/Coaches';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Overlay from './components/Overlay';
import useAppContext from './utils/Maincontext';

const App = () => {
  const { overlay, overlayHandler } = useAppContext();

  return (
    <div className={`overflow-x-hidden overflow-y-hidden ${overlay ? 'h-screen overflow-hidden' : 'h-auto'}`}>
      {overlay ? <Overlay /> : ''}
      <Header />
      <About />
      <Courses />
      <Banner />
      <Coaches />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
