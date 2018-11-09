import * as React from 'react';

const styles = {
  accountSetting: {
    color: 'red',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '124px',
  },
  container: {
    border: 'red solid',
    borderRadius: '25px',
    height: '500px',
    marginLeft: '5%',
    marginRight: '5%',
    width: '90%',
  },
  img: {
    border: 'red solid 0.5px',
    borderRadius: '155px',
    height: '200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '16px',
    textAlign: 'center',
    width: '70%',
  },
  lists: {
    fontSize: '20px',
  },
};

const UserCard = () => {
  return (
    <div style={styles.container}>
      <div style={styles.img}>img</div>
      <ul style={styles.lists}>
        <li>props in other information</li>
        <li>props in other information</li>
        <li>props in other information</li>
        <li>props in other information</li>
        <li>props in other information</li>
        <li>props in other information</li>
        <li>props in other information</li>
        <li>props in other information</li>
      </ul>
      <div style={styles.accountSetting}>Account Settings</div>
    </div>
  );
};
export default UserCard;
