import * as React from 'react';

const style = {
  container: {
    width: '47%',
    height: '270px',
    margin: '6px',
    border: 'red solid',
    borderRadius: '30px',
  },
  img: {
    width: '100%',
    borderRadius: '30px',
    border: 'red solid 0.5px',
    height: '100px',
    marginTop: '-1px',

    textAlign: 'center',
  },
};


const CommuniyCard = () => {
  return (
    <div style={style.container}>
      <div style={style.img}>img</div>
      <ul style={{ fontSize: '20px' }}>
        <li>props in other information</li>
        <li>props in other information</li>
        <li>props in other information</li>
        <li>props in other information</li>
        <li>props in other information</li>
      </ul>
    </div>
  );
};

export default CommuniyCard;
