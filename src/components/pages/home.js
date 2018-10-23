import React from 'react';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="home">
          hello world!
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Home;
