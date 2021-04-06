import React from 'react';
import Header from '../header';
import ModalView from '../modal-view';
import MapContainer from '../map-container';
import jumbo_image from '../../images/jumbo_image.png';


const App = () => {
  console.log(process.env.PUBLIC_URL)
  return (
    <>
      <Header /> 
      <ModalView />
      <div className="container-fluid">
        <div className="container">
          <section className="description row pt-5">
            <div className="col-sm mb-3">
              <h1>About Us</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              <button href="#"
                className="btn btn-primary btn-lg" 
                data-toggle="modal"
                data-target="#myModal"
              > 
                Write Us
              </button>
            </div>
            <div className="col-sm mb-3">
              <img src={jumbo_image} id="jumbo_image" alt=""/>
            </div>
          </section>
        </div>
      </div>

      
      
      <div className="contacts-section container-fluid">
        <div className="container pt-3">
        <h3>Office location</h3>
        <section className="map mb-5"> 
          <MapContainer/>
        </section>
          <h3>Our Contacts</h3>
          <div className="contacts">
            <div className="contacts-card">
              <h4>General</h4>
              <div className="сontacts-list">
                <ul>
                  <li>
                    <i className="fas fa-phone-square-alt"></i>
                    &nbsp;&nbsp;+38(098)175-79-02
                  </li>
                  <li>
                    <i className="fab fa-mailchimp"></i>
                    &nbsp;&nbsp;lorem_ipsum@mail.com
                  </li>
                  <li>
                    <i className="fab fa-telegram"></i>
                    &nbsp;&nbsp;@lorem_ipsum
                  </li>
                </ul>
                
              </div>
            </div>
            <div className="contacts-card">
              <h4>Social media</h4>
              <div className="icons">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-viber"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
