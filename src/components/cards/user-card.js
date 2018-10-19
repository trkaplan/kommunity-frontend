import * as React from 'react';

const styles = {
  container: {
    width: '90%',
    height: '500px',
    marginLeft: '5%',
    marginRight: '5%',
    borderRadius: '25px',
    border: 'red solid',
  },
  img: {
    width: '70%',
    borderRadius: '155px',
    border: 'red solid 0.5px',
    height: '200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '16px',
    textAlign: 'center',
  },
  accountSetting: {
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'red',
    width: '124px',
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
