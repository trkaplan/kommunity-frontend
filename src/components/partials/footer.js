import React from 'react';

const styles = {
  footer: {
    backgroundColor: '#000',
    color: '#fff'
  },
  logo: {
    height: '50px',
    width: '80px',
    lineHeight: '50px',
    textAlign: 'center',
    backgroundColor: 'red',
    display: 'inline-block'
  },
  links: {
    listStyle:'none',
    paddingLeft: 0,
    float: 'right',
    display: 'flex',
  },
  link: {
    paddingLeft: '10px',
    paddingRight: '10px',
    borderRight: '1px solid #fff'
  },
  linkBorderless: {
    paddingLeft: '10px',
    paddingRight: '10px'
  }
};

const Footer = () => {
  let links = ['Home','Communities','About','Contact'];
  return (
    <div style={styles.footer}>
      <div style={styles.logo}>
        Logo
      </div>
      <ul style={styles.links}>
        {
          links.map((title, i) => {
            return (<li key={i} style={ (i !== links.length - 1) ? styles.link : styles.linkBorderless }>{title}</li>)
          })
        }
      </ul>
    </div>
  );
}

export default Footer;
