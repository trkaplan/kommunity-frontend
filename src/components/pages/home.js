import React from 'react';
import Header from '@/components/common/header';
import FindCommunities from '@/components/common/find-communities';
import Footer from '@/components/common/footer';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="home">
          hello world!
        </div>
        <FindCommunities/>
        <Footer/>
      </div>
    );
  }
}

export default Home;
