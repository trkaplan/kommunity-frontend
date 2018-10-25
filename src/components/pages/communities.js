import React, { Component } from 'react';

import CommunityCard from '@/components/common/cards/community-card';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import Button from '@/components/ui/button';

const style = {
  container: {
    maxWidth: '980px',
    margin: 'auto',
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
    height: '160px',
  },
  createCommunities: {
    marginBottom: '160px',
    marginLeft: '240px',
  },
  text: {
    fontSize: '28px',
    fontWeight: 'bold',
    height: '64px',
    margin: '0 auto',
  },
  button: {
    width: '100px',
    height: '100px',
    margin: '0 auto',
  },
};

class CommunityList extends Component {
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
        <div style={style.createCommunities}>
          <div style={style.text}>{"Can't find what you are looking for?"}</div>
          <span style={style.button}>
            <Button title="Create Your Community" onClick={() => {}} size="xlarge" type="secondary" style={{ alignItems: 'center' }}/>
          </span>
        </div>
        <Footer />
      </div>
    );
  }
}

export default CommunityList;
