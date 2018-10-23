import React, { Component } from 'react';

import CommunityCard from '@/components/common/cards/community-card';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import Button from '@/components/ui/button';

const style = {
  container: {
    marginLeft: '200px',
    marginRight: '200px',
  },
  middle: {
    height: '420px',
    display: 'flex',
  },
  userCommunities: {
    width: '100%',
    height: '100%',
    display: ' flex',
  },
  searchBar: {
    height: '150px',
  },
  createComminities: {
    marginBottom: '200px',
    marginLeft: '300px',
    display: 'inline-block',
  },
  text: {
    textAlign: 'center',
    fontSize: '25px',
    fontWeight: 'bold',
    marginBottom: '30px',
  },
};

class Communities extends Component {
  render() {
    return (
      <div style={style.container}>
        <Header />
        <div style={style.searchBar}>Search Bar!</div>
        <h3>Hot Communities</h3>
        <div style={style.middle}>
          <div style={style.userCommunities}>
            {[1, 2, 3, 4].map((item, idx) => (
              <CommunityCard value={item} key={idx} />
            ))}
          </div>
        </div>
        <h3>Fresh Communities</h3>
        <div style={style.middle}>
          <div style={style.userCommunities}>
            {[1, 2, 3, 4].map((item, idx) => (
              <CommunityCard value={item} key={idx} />
            ))}
          </div>
        </div>
        <div style={style.createComminities}>
          <div style={style.text}>{"Can't find what you are looking for?"}</div>
          <Button title="Create Your Community" onClick={() => {}} size="xlarge" type="secondary" style={{ alignItems: 'center' }}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Communities;
