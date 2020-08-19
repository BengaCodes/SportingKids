import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-top">
        <img id="sk-logo" src="https://static.wixstatic.com/media/1a0189_f6d00781a30642748a8c3de78937a259~mv2_d_2480_1265_s_2.png/v1/crop/x_0,y_244,w_2480,h_785/fill/w_600,h_190,al_c,q_85,usm_0.66_1.00_0.01/Sporting%20Kids%20logo%20PNG.webp" alt="Sporting Kids" />
        <div className="contact">
          <div className="email">
            <p><strong><ion-icon name="mail-outline"></ion-icon></strong></p>
            <div className="email-detail">
              <p><strong>Email Us:</strong></p>
              <p>admin@sportingkids.co.uk</p>
            </div>

          </div>
          <div className="phone-number">
            <p><strong><ion-icon name="call-outline"></ion-icon></strong></p>
            <div className="phone-number-detail">
              <p><strong>Call Us:</strong></p>
              <p>07904618138</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="nav-divider"></hr>
      <div className="nav-bottom">
        <div className="menu-port">
          <div className="links">
            <div className="nav-link nav-link-home">
              <Link to="/" className="nav-link">HOME</Link>
            </div>
            <div className="nav-link nav-link-about">
              <Link to="/about" className="nav-link">ABOUT</Link>
            </div>

            <div className="nav-link nav-link-multi-sport-services">
              <Link to="/multisports" className="nav-link"><p className="multi-sport-services" style={{ marginLeft: '20%' }}>MULTI-SPORT SERVICES</p></Link>
            </div>

            <div className="nav-link nav-link-school-services">
              <Link to="/schoolservices" className="nav-link">SCHOOL SERVICES</Link>
            </div>

            <div className="nav-link nav-link-whats-on">
              <Link to="/whatson" className="nav-link">WHATS ON</Link>
            </div>

            <div className="nav-link nav-link-contact-us">
              <Link to="/contact" className="nav-link">CONTACT US</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar