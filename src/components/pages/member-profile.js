import * as React from 'react';
import { connect } from 'react-redux';
import CommunityCard from '@/components/common/cards/community-card';
import UserCard from '@/components/common/cards/user-card';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';


const style = {
  middle: {
    height: '1500px',
    display: 'flex',
  },
  userInfo: {
    width: '34%',
    height: '100%',
  },
  userCommunities: {
    width: '76%',
    height: '100%',
    display: ' flex',
    flexWrap: 'wrap',
  },
  topImage: {
    height: '150px',
  },
  container: {
    marginLeft: '200px',
    marginRight: '200px',
  },
};

class MemeberProfile extends React.Component {
  render() {
    return (
      <div style={style.container}>
        <Header />
        <div style={style.topImage}>big img</div>
        <div style={style.middle}>
          <div style={style.userInfo}>
            <UserCard />
          </div>
          <div style={style.userCommunities}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, idx) => (
              <CommunityCard value={item} key={idx} />
            ))}
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
const mapStateToProps = state => ({ state });
const mapActionsToProps = {};
export default connect(
  mapStateToProps,
  mapActionsToProps,
)(MemeberProfile);
