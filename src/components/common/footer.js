import React from 'react';

const styles = {
  footer: {
    backgroundColor: '#000',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
  },
  link: {
    borderRight: '1px solid #fff',
    padding: '0 12px',
  },
  linkBorderless: {
    padding: '0 12px',
  },
  links: {
    display: 'flex',
    listStyle: 'none',
    paddingLeft: 0,
  },
  logo: {
    backgroundColor: 'red',
    height: '50px',
    lineHeight: '50px',
    textAlign: 'center',
    width: '80px',
  },
};

const Footer = () => {
  const links = ['Home', 'Communities', 'About', 'Contact'];
  return (
    <div style={styles.footer}>
      <div style={styles.logo}>
        Logo
      </div>
      <ul style={styles.links}>
        {
          links.map((title, i) => {
            return (
              <li
                key={i}
                style={(i !== links.length - 1) ? styles.link : styles.linkBorderless}>
                {title}
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Footer;
