import * as React from 'react';
import { connect } from 'react-redux';
import { CommunityCard, UserCard } from '$/components/cards';

const style = {
  container: {
    height: '1500px',
  },
  userInfo: {
    width: '34%',
    height: '100%',
    float: 'left',
  },
  userCommunities: {
    height: '100%',
    WebkitFlexWrap: 'wrap',
    display: ' flex',
    flexWrap: 'wrap',
    overflow: 'auto',
  },
};

class MemeberProfile extends React.Component {
  render() {
    return (
      <div style={style.container}>
        <div style={style.userInfo}>
          <UserCard />
        </div>
        <div style={style.userCommunities}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
            <CommunityCard value={item} key={item} />
          ))}
        </div>
      </div>
    );
  }
}
const HeaderAndFooter = props => (
  <div style={{ marginLeft: '200px', marginRight: '200px' }}>
    <div style={{ height: '90px' }}>header</div>
    <div style={{ height: '150px' }}>big image</div>
    <MemeberProfile {...props} />
    <div style={{ height: '90px' }}>footer</div>
  </div>
);

const mapStateToProps = state => ({ state });
const mapActionsToProps = {};
export default connect(
  mapStateToProps,
  mapActionsToProps,
  // )(MemeberProfile);
)(HeaderAndFooter);
