import React from 'react';
import '../Home/page2.css';

import menuLogo from '../imgs/menu-logo.png';
import footerImg from '../imgs/black&white-logo.png';


export const ContactUs2 = () => {

  return (
<>
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
  <ul className="nav navbar-nav">
  <li><a href="#">Home</a></li>
  <li><a href="#">Accounts</a></li>
  <li className="dropdown">
    <a href="#">Cards</a>
  </li>
  <li><a href="#">Education & Goals</a></li>
</ul>
<ul class="nav navbar-nav navbar-right">
      <li><a><img src={menuLogo}/></a></li>
    </ul>
  </div>
      </nav>
      <main>

        <img src={footerImg} class="contactus-img" />
  <div class="contactus-form">
    <form>
      <div class="form-group">
        <label for="usr">Name:</label>
        <input type="text" class="form-control" id="usr"/>
      </div>
        <div class="form-group">
        <label for="pwd">Password:</label>
        <input type="password" class="form-control" id="pwd"/>
      </div>
      <div class="form-group">
        <label for="comment">Comment:</label>
        <textarea class="form-control" rows="5" id="comment"></textarea>
      </div>
    </form>
  </div>
      </main>

</>
  );
}

export default ContactUs2;