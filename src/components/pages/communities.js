import React, { Component } from 'react';

import CommunityCard from '@/components/common/cards/community-card';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import { Button } from '@/components/ui';

import i18n from '@/i18n';

const style = {
  button: {
    height: '100px',
    margin: '0 auto',
    width: '100px',
  },
  container: {
    margin: 'auto',
    maxWidth: '980px',
  },
  createCommunities: {
    marginBottom: '160px',
    marginLeft: '240px',
  },
  middle: {
    display: 'flex',
    height: '420px',
  },
  searchBar: {
    height: '160px',
  },
  text: {
    fontSize: '28px',
    fontWeight: 'bold',
    height: '64px',
    margin: '0 auto',
  },
  userCommunities: {
    display: ' flex',
    height: '100%',
    width: '100%',
  },
};

class CommunityList extends Component {
  render() {
    return (
      <div style={style.container}>
        <Header />
        <div style={style.searchBar}>Search Bar!</div>
        <h3>{i18n.t('communities.title')}</h3>
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
            <Button label="Create Your Community" onClick={() => {}} size="large" styleType="secondary" extraClassName="items-center"/>
          </span>
        </div>
        <Footer />
      </div>
    );
  }
}

CommunityList.propTypes = {};

export default CommunityList;
