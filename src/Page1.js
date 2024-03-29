import React from 'react';
import Header from './Header'; 
import Navbar from './Navbar'; 
import Carousel from 'react-bootstrap/Carousel';
import img1 from './imgs/Designer.png';
import img2 from './imgs/Designerr.png';
import img3 from './imgs/Designer3.png';
import './page1.css'
        {/* <img className="float-end m-5 ml-3" style={{ width: '60%', height: '40rem', fontSize: '100px' }} src="imgs/11.jfif" alt="foto" /> */}


export const Page1 = () => {
  return (
    <><div>
      <Header />
      <Navbar />

    <div>
      {/* <div className="container">
        <div className="desc">
          <h3><i className="fas fa-globe"></i> Welcome to E-Banking</h3>
          <h1>Stay in Control Your <br /><span className="highlight">Finances</span> With E-Banking</h1>
          <a href="/">Create Account</a>
        </div>
      </div> */}
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


    


    </div><center> <h1 id='sh'>Sherbimet tona</h1></center><div className="row justify-content-between">
        <div className="col">
          <div className="card" style={{ width: '18rem', fontSize: '100px' }}>
            <a style={{ textAlign: 'center', color: 'red' }} href="/"><i className="fas fa-exchange-alt"></i></a>



            <div className="card-body">
              <p className="card-text">Money Transfer</p>
            </div>
          </div>
        </div>


        <div className="col">
          <div className="card" style={{ width: '18rem', fontSize: '100px' }}>
            <a style={{ textAlign: 'center', color: 'red' }} href="/"><i className="fas fa-money-bill-alt"></i></a>
            <div className="card-body">
              <p className="card-text">Withdraw</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card" style={{ width: '18rem', fontSize: '100px' }}>
            <a style={{ textAlign: 'center', color: 'red' }} href="/"><i className="fas fa-university"></i></a>
            <div className="card-body">
              <p className="card-text">Bank Deposit</p>
            </div>
          </div>
        </div>


        <section className="py-3 py-md-5 py-xl-8">
          <div className="container">
            <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
              <div className="col-12 col-lg-6 col-xl-5">
                <img className="img-fluid rounded" style={{ width: '300%', height: '%', fontSize: '100px' }} src="imgs/happy card.png" alt="foto" />

              </div>
              <div className="col-12 col-lg-6 col-xl-7">
                <div className="row justify-content-xl-center">
                  <div className="col-12 col-xl-11">
                    <h2 id="e" className="h1 mb-3">Who Are We?</h2>
                    <p className="lead fs-4 text-secondary mb-3">You don't run a business hoping you don't have a recession</p>
                    <p className="mb-5">E-banking is a financial institution dedicated to providing a wide range of financial services to individuals, businesses, and institutions. With a focus on fostering financial well-being and facilitating economic growth, E-Banking offers various banking products and services tailored to meet the diverse needs of its customers.</p>
                    <div className="row gy-4 gy-md-0 gx-xxl-5X">
                      <div className="col-12 col-md-6">
                        <div className="d-flex">
                          <div className="me-4 text-primary">

                          </div>
                          <div>
                            <h4 id="b" className="mb-3">Versatile Brand</h4>
                            <p className="text-secondary mb-0">We are crafting a digital method that subsists life across all mediums.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="d-flex">
                          <div className="me-4 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-fire" viewBox="0 0 16 16">
                              <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                            </svg>
                          </div>
                          <div>
                            <h4 id="a" className="mb-3">Digital Agency</h4>
                            <p className="text-secondary mb-0">We believe in innovation by merging primary with elaborate ideas.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className='contact'>
          <div className="right-side">
          <h2>Contact Us</h2>
            <p>If you have any work from me or any types of queries related to my tutorial, you can send me a message from here. It's my pleasure to help you.</p>
            <form action="/" method="post">
              <div className="input-box">
                <input type="text" name="name" placeholder="Enter your name" />
              </div>
              <div className="input-box">
                <input type="text" name="email" placeholder="Enter your email" />
              </div>
              <div className="input-box message-box">

                <input type="text" name="message" placeholder="Enter your message" />

                <button id="l">Send</button>

              </div>
            </form>



    </div>

</div>







      </div></>
       







   

  );
}

