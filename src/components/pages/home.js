import React from 'react';
import Header from '@/components/common/header';
import FindCommunities from '@/components/common/find-communities';
import Footer from '@/components/common/footer';

import HomeHero from './home/hero';

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="home">
          <HomeHero />
        </div>
        <div className="find-communities">
          <FindCommunities/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Home;
