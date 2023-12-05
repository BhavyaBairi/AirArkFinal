import React, { useState, useEffect } from 'react';
import styles from '../Navbar/Navbar.module.css';
import Logo from '/Users/Hp/airark/src/Assets/logo.png';
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div className={styles.navbar}>
    <nav className={`navbar navbar-expand-lg ${isScrolled ? 'scrolled' : ''} `}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img src={Logo} className={styles.logo}/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse `} id="navbarNav">
      <ul className={`navbar-nav ${styles.nav}`}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Career</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>

    </>
  );
}

export default Navbar;
