import * as React from 'react';
import PropTypes from 'prop-types';

const styles = {
  container: {
    padding: '4px',
    width: '48%',
  },

  img: {
    border: 'red solid 0.5px',
    borderRadius: '30px',
    height: '100px',
    textAlign: 'center',
    width: '100%',
  },
  lists: {
    fontSize: '20px',
  },
  middle: {
    border: 'red solid',
    borderRadius: '30px',
    boxSizing: 'border-box',
    height: '300px',
    width: '100%',
  },
};

const CommunityCard = (props) => {
  const { name } = props;

  return (
    <div style={styles.container}>
      <div style={styles.middle}>
        <h3>{name}</h3>
        <div style={styles.img}>img</div>
        <ul style={styles.list}>
          <li>props in other information</li>
          <li>props in other information</li>
          <li>props in other information</li>
          <li>props in other information</li>
          <li>props in other information</li>
          <li>props in other information</li>
          <li>props in other information</li>
        </ul>
      </div>
    </div>
  );
};
CommunityCard.propTypes = {
  name: PropTypes.string,
};

export default CommunityCard;
