import React from 'react';

const styles = {
  footer: {
    backgroundColor: '#000',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    height: '50px',
    width: '80px',
    lineHeight: '50px',
    textAlign: 'center',
    backgroundColor: 'red',
  },
  links: {
    listStyle: 'none',
    paddingLeft: 0,
    display: 'flex',
  },
  link: {
    padding: '0 12px',
    borderRight: '1px solid #fff',
  },
  linkBorderless: {
    padding: '0 12px',
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
