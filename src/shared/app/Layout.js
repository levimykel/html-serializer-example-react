/**
 * The menu content that is rendered here is queried on
 * the server-side in src/server/index.js.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Link as PrismicLink, RichText } from 'prismic-reactjs';
import PrismicConfig from '../../prismic-configuration';

export const Layout = (props) => {
  

  const menu = props.menu.data.navLinks.map(function(menuItem, index){
    var menuLink = PrismicLink.url(menuItem.link, PrismicConfig.linkResolver);
    return <li key={index}><Link to={menuLink}>{menuItem.label}</Link></li>;
  });
  
  return(
    <div className="app-container">
      <header className="site-header">
        <Link to="/" className="logo">Example Site</Link>
        <nav>
          <ul>{menu}</ul>
        </nav>
      </header>
      <div>{props.children}</div>
      <footer>
        <p>Proudly published with  <a href="https://prismic.io" target="_blank">prismic.io</a><br/><a href="https://prismic.io" target="_blank"><img src="/images/logo-prismic.svg" className="footer-logo"/></a></p>
      </footer>
    </div>
  );
};

export default Layout;