import React from 'react';
import About from '../NavBarItems/About';
import Reasons from './Reasons';
import Teams from './Teams';
import BackToTop from './BackToTop ';
import Carousels from './Carousels';
import CallUsForQuotes from '../NavBarItems/CallUsForQuotes';
import Footer from '../Footer/Footer';
import Facts from './Facts';


const Body = () => {
  return (
    <div>
           <Carousels />
            <Facts />
            <About />
            <Reasons />
            <CallUsForQuotes />
            <Teams />
            <Footer />
            <BackToTop />
        </div >
    )
}

export default Body;