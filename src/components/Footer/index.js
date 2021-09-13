import React from 'react';
import "./footer.css"
const Footer = () => {
    return (
        <footer >
          <div className="d-flex justify-content-evenly">
              <ul>
                  <li>Politics</li>
                  <li>Business</li>
              </ul>
              <ul>
                  <li>Tech</li>
                  <li>Science</li>
              </ul>
              <ul>
                  <li>Privacy policy</li>
                  <li>Contacts</li>
              </ul>
          </div>
            <p className="text-center">
                &copy; {new Date().getFullYear() } USA Today | All rights reserved
            </p>
        </footer>
    );
};

export default Footer;