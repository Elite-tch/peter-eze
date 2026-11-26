'use client';
import React, { useEffect } from 'react';

function Navbar() {
  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector('.navbar');

    if (navbar) {
      if (bodyScroll > 300) navbar.classList.add('nav-scroll');
      else navbar.classList.remove('nav-scroll');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleToggleNav() {
    const navCollapse = document.querySelector('.navbar .navbar-collapse');
    if (navCollapse) {
      if (navCollapse.classList.contains('show')) {
        navCollapse.classList.remove('show');
      } else {
        navCollapse.classList.add('show');
      }
    }
  }

  return (
    <nav className="navbar navbar-expand-lg bord blur peter-eze-navbar">
      <div className="container o-hidden">
        <a className="logo icon-img-100 text-white" href="/peter-eze">
          <span className="fw-700 fz-18 ls1 text-white" style={{ whiteSpace: 'nowrap', lineHeight: 1.1 }}>
            HON. PETER<br />EZE
          </span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggleNav}
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/peter-eze">
                <span className="rolling-text">Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about-nidefeast">
                <span className="rolling-text">About</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/peter-eze">
                <span className="rolling-text">Key Mandates</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/peter-eze">
                <span className="rolling-text">Press & Bulletins</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="contact-button">
          <a
            href="/about-nidefeast"
            className="butn butn-sm butn-bg bg-white radius-5"
          >
            <span className="text">Contact Office</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
