import React from 'react';

const Footer = () => {

  return (
    
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <div className="single-footer-widget">
              <h3 className="logo">Auto</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <a href="mailto:info@domain.com">info@domain.com</a>
            </div>
          </div>
          <div className="col-2">
            <div className="single-footer-widget">
              <h3>Contact</h3>
              <div className="footer-contact">
                <ul>
                  <li>Phone: <a href="tel:63555485">63555485 </a></li>
                  <li>Adrress: <span>4835 W Mont Ave Uni 5,
                  60641 NS SR</span>
                   </li>
                  <li>Email:<a href="mailto:info@domain.com">info@domain.com</a></li>
                  </ul>
                  </div>
            </div>
          </div>
          <div className="copyright">
              <p>© 2020 Copyright Text</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
