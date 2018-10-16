import * as React from 'react';

const style = {
  UserCard: {
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
    width: '125px',
  },
};

const UserCard = () => {
  return (
    <div style={style.UserCard}>
      <div style={style.img}>img</div>
      <ul style={{ fontSize: '20px' }}>
        <li>props in other information</li>
        <li>props in other information</li>
        <li>props in other information</li>
        <li>props in other information</li>
        <li>props in other information</li>
        <li>props in other information</li>
        <li>props in other information</li>
        <li>props in other information</li>
      </ul>
      <div style={style.accountSetting}>Account Settings</div>
    </div>
  );
};
export default UserCard;
