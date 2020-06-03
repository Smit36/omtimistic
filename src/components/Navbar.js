import React, { Component } from 'react';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <div className='site-mobile-menu site-navbar-target'>
          <div className='site-mobile-menu-header'>
            <div className='site-mobile-menu-close mt-3'>
              <span className='icon-close2 js-menu-toggle'></span>
            </div>
          </div>
          <div className='site-mobile-menu-body'></div>
        </div>
        <header
          className='header-bar d-flex d-lg-block align-items-center site-navbar-target'
          data-aos='fade-right'
        >
          <div className='site-logo'>
            <a href='index.html'>Omtimistic</a>
          </div>

          <div
            className='d-inline-block d-lg-none ml-md-0 ml-auto py-3'
            style={{ position: 'relative', top: '3px' }}
          >
            <a href='#' className='site-menu-toggle js-menu-toggle text-white'>
              <span className='icon-menu h3'></span>
            </a>
          </div>

          <div className='main-menu'>
            <ul className='js-clone-nav'>
              <li>
                <a href='#section-home' className='nav-link'>
                  Home
                </a>
              </li>
              <li>
                <a href='#section-photos' className='nav-link'>
                  Artworks
                </a>
              </li>
              <li>
                <a href='#section-bio' className='nav-link'>
                  About Myself
                </a>
              </li>
              <li>
                <a href='#section-blog' className='nav-link'>
                  Blog
                </a>
              </li>
              <li>
                <a href='#section-contact' className='nav-link'>
                  Reach Out
                </a>
              </li>
            </ul>
            <ul className='social js-clone-nav'>
              <li>
                <a href='#'>
                  <span className='icon-facebook'></span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <span className='icon-twitter'></span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <span className='icon-instagram'></span>
                </a>
              </li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default Navbar;
