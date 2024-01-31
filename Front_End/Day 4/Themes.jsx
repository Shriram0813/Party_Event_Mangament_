
import React from 'react';
import '../assets/css/Themes.css'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
const Themes = () => {
  const navigation=useNavigate();
  const themesClick=()=> {
  navigation('/Product')
  }
          return (
            <>
              <Navbar />
                    <div>
                      {/* <h1>Tickets cards</h1> */}
                      <ul>
                        <li className="booking-card" style={{backgroundImage: 'url(https://img.freepik.com/free-photo/happy-friends-eating-drinking-beers-barbecue-dinner-sunset-time_155003-24221.jpg?size=626&ext=jpg&uid=R127991775&ga=GA1.1.1852684403.1688965484&semt=ais'}}>
                          <div className="book-container">
                            <div className="content">
                              <button className="btn" onClick={themesClick}>Book Now</button>
                            </div>
                          </div>
                          <div className="informations-container">
                            <h2 className="title">Garden Party</h2>
                            <p className="sub-title">Host an outdoor garden party with floral decorations, picnic-style seating, and a relaxed atmosphere</p>
                            <p className="price"><svg className="icon" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z" />
                              </svg>10,000 - 15,000</p>
                            <div className="more-information">
                              <div className="info-and-date-container">
                                <div className="box info">
                                  <svg className="icon" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
                                  </svg>
                                  <p>Available Now</p>
                                </div>
                                <div className="box date">
                                  <svg className="icon" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
                                  </svg>
                                  <p>27th Jan</p>
                                </div>
                              </div>
                              <p className="disclaimer">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eveniet perferendis culpa. Expedita architecto nesciunt, rem distinctio</p>
                            </div>
                          </div>
                        </li>
                        <li className="booking-card" style={{backgroundImage: 'url(https://img.freepik.com/free-photo/top-view-travel-photos-with-adventure-essentials_23-2149185286.jpg?size=626&ext=jpg&uid=R127991775&ga=GA1.1.1852684403.1688965484&semt=ais'}}>
                          <div className="book-container">
                            <div className="content">
                              <button className="btn">Book Now</button>
                            </div>
                          </div>
                          <div className="informations-container">
                            <h2 className="title">Memory Lane Photo Booth</h2>
                            <p className="sub-title">Set up a photo booth with props and backdrops that reflect the theme or various eras of the group's history. Encourage attendees to take fun and memorable pictures</p>
                            <p className="price"><svg className="icon" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z" />
                              </svg>5,000 - 10,000</p>
                            <div className="more-information">
                              <div className="info-and-date-container">
                                <div className="box info">
                                  <svg className="icon" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
                                  </svg>
                                  <p>Fast Booking</p>
                                </div>
                                <div className="box date">
                                  <svg className="icon" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
                                  </svg>
                                  <p>14th Feb</p>
                                </div>
                              </div>
                              <p className="disclaimer">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eveniet perferendis culpa. Expedita architecto nesciunt, rem distinctio</p>
                            </div>
                          </div>
                        </li>
                        <li className="booking-card" style={{backgroundImage: 'url(https://img.freepik.com/premium-photo/band-performs-stage-rock-music-concert-nightclub-authentic-shooting-with-high-iso-challenging-lighting-conditions-little-bit-grain-blurred-motion-effects_564276-8232.jpg?size=626&ext=jpg&uid=R127991775&ga=GA1.1.1852684403.1688965484&semt=ais'}}>
                          <div className="book-container">
                            <div className="content">
                              <button className="btn">Book Now</button>
                            </div>
                          </div>
                          <div className="informations-container">
                            <h2 className="title">Live Entertainment</h2>
                            <p className="sub-title">Hire a live band, DJ, or performers to provide entertainment. This could be music, stand-up comedy, or other acts that suit the preferences of the group</p>
                            <p className="price"><svg className="icon" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z" />
                              </svg>15,000 - 20,000</p>
                            <div className="more-information">
                              <div className="info-and-date-container">
                                <div className="box info">
                                  <svg className="icon" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
                                  </svg>
                                  <p>Not Available</p>
                                </div>
                                <div className="box date">
                                  <svg className="icon" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
                                  </svg>
                                  <p>08 March</p>
                                </div>
                              </div>
                              <p className="disclaimer">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eveniet perferendis culpa. Expedita architecto nesciunt, rem distinctio</p>
                            </div>
                          </div>
                        </li>
                        <li className="booking-card" style={{backgroundImage: 'url(https://as1.ftcdn.net/v2/jpg/06/49/89/28/1000_F_649892891_2XBVTkwWhx74DEryDFGIUOGToP5Ee6BD.jpg'}}>
                          <div className="book-container">
                            <div className="content">
                              <button className="btn">Book Now</button>
                            </div>
                          </div>
                          <div className="informations-container">
                            <h2 className="title">Evening Bonfire or Campfire Stories</h2>
                            <p className="sub-title">If you have an outdoor venue, consider ending the day with a bonfire. It provides a cozy setting for more storytelling, singing, or simply enjoying each other's company</p>
                            <p className="price"><svg className="icon" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z" />
                              </svg>3,000 - 5000 €</p>
                            <div className="more-information">
                              <div className="info-and-date-container">
                                <div className="box info">
                                  <svg className="icon" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
                                  </svg>
                                  <p>Fast Booking</p>
                                </div>
                                <div className="box date">
                                  <svg className="icon" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
                                  </svg>
                                  <p>15 Feb</p>
                                </div>
                              </div>
                              <p className="disclaimer">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eveniet perferendis culpa. Expedita architecto nesciunt, rem distinctio</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                     
                    </div>
                    <Footer/>
            </>
                  );
                }
           export default Themes;
          
