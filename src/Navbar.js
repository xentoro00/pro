import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const homeElement = document.getElementById('home');
      const navbar = document.querySelector('nav');

      if (homeElement && window.scrollY < homeElement.offsetHeight) {
        navbar.classList.add('hom-background');
      } else {
        navbar.classList.remove('hom-background');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash.substr(1));
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleClick = (id) => {
    setActiveLink(id);
  };
  

  return (
    <nav>
      <div className="left-nav">
        <a href="/">
          <img src="imgs/e-banking-favicon-black.png" alt="logo" width="250px" height="200px" />
        </a>
      </div>
      <div className="middle-nav">
        <ul>
          <li><a className={`hoverable ${activeLink === 'home' ? 'active hom-background' : ''}`} id="home" href="#home" onClick={() => handleClick('home')}>Home</a></li>
          <li><a className={`hoverable ${activeLink === 'loans' ? 'active hom-background' : ''}`} href="#loans" onClick={() => handleClick('loans')}>Loans</a></li>
          <li><a className={`hoverable ${activeLink === 'about' ? 'active hom-background' : ''}`} href="#about" onClick={() => handleClick('about')}>About Us</a></li>
          <li><a className={`hoverable ${activeLink === 'services' ? 'active hom-background' : ''}`} href="#services" onClick={() => handleClick('services')}>Services</a></li>
          <li><a className={`hoverable ${activeLink === 'pages' ? 'active hom-background' : ''}`} href="#pages" onClick={() => handleClick('pages')}>Pages</a></li>
          <li><a className={`hoverable ${activeLink === 'blog' ? 'active hom-background' : ''}`} href="#blog" onClick={() => handleClick('blog')}>Blog</a></li>
        </ul>
      </div>
      <div className="right-nav">
        <div>
          <a href="#" className="btn yellow">
            <span>Apply Now</span>
            <ion-icon name="arrow-forward"></ion-icon>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
