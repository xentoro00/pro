import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from './imgs/Designer.png';
import img2 from './imgs/Designerr.png';
import img3 from './imgs/Designer3.png';
import './CarouselPage.css';
import Header from './Header'; 
import Navbar from './Navbar'; 
// import './page1.css';

function CarouselPage() {
 
  return (
    <div>
      <div className="container-fluid">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li><a id="len1" className="hoverable" href="#">Home</a></li>
              <li><a id="len2" className="hoverable" href="#">About</a></li>
              <li><a id="len3" className="hoverable" href="#">Portfolio</a></li>
              <li><a id="len4" className="hoverable" href="#">Contact</a></li>
            </ul>
          </div>
        </nav>
        <div id="what-the-hell-is-this">
          <div className="page-title">
            <h2>Simple Navigation</h2>
            <p className="lead">
              Based on Hover.css, the goal of this pen
              is to create a simple navigation bar <br />
              that can be easily reused in both mobile and native displays. Mouse over the nav text for animation!
            </p>
          </div>
        </div>
      </div>

      <Carousel>
        <Carousel.Item>
          <img style={{ height:'90vh'}} className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:'90vh'}} className="d-block w-100" src={img2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:'90vh'}} className="d-block w-100" src={img3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselPage;
