import './style/sidebar.css';
import './style/mobile_screen.css';
import './Navbar';
import './Main_colum';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faVolumeDown } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faRadio } from '@fortawesome/free-solid-svg-icons';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import sidebar_colum_img from './imges/Luxury-Simple.jpg';

const Sidebar = () => {
  return(
      <>
          <section id="sideNav">
              <div className="sidebar-content">
                  {/*list_1*/}
                  <div className="sidebar">
                      <div className="top-sidebar-icon-click">
                          <div className="sidebar-icon-link">
                              <a href=""><FontAwesomeIcon icon={ faHeartPulse } className="fa-1x" />
                                  Groovvy
                              </a>
                          </div>
                          <div className="remove-sidebar-icon">
                                   <a href="" className=" text-white" data-bs-dismiss="offcanvas" aria-label="Close">
                                       <FontAwesomeIcon icon={ faRemove } className="fa-1x" /></a>
                          </div>
                      </div>
                      <div className="sidebar-link mt-5">
                          <p>MENU</p>
                          <ul>
                              <li><a href=""><FontAwesomeIcon icon={ faBolt } className="fa-1x" />Expoler</a></li>
                              <li><a href=""><FontAwesomeIcon icon={ faVolumeDown } className="fa-1x" />Genres</a></li>
                              <li><a href=""><FontAwesomeIcon icon={ faVideo } className="fa-1x" />Albums</a></li>
                              <li><a href=""><FontAwesomeIcon icon={ faMicrophone } className="fa-1x" />Artists</a></li>
                              <li><a href=""><FontAwesomeIcon icon={ faRadio } className="fa-1x" />Radio</a></li>
                          </ul>
                      </div>
                  </div>
                  {/*list_2*/}
                  <div className="sidebar">
                      <div className="sidebar-link">
                          <p>LIBRARY</p>
                          <ul>
                              <li><a href=""><FontAwesomeIcon icon={ faRefresh } className="fa-1x" />Recent</a></li>
                              <li><a href=""><FontAwesomeIcon icon={ faVideo } className="fa-1x" />Albums</a></li>
                              {/*<li><a href=""><FontAwesomeIcon icon={ faHeart } className="fa-1x" />Favourites</a></li>*/}
                              {/*<li><a href=""><FontAwesomeIcon icon={ faFile } className="fa-1x" />Local</a></li>*/}
                          </ul>
                      </div>
                  </div>
                  {/*list_3*/}
                  <div className="sidebar">
                      <div className="sidebar-link">
                          <p>PLAYLIST</p>
                          <ul>
                              <li><a href=""><FontAwesomeIcon icon={ faAdd } className="fa-1x" />Create New</a></li>
                              <li><a href=""><FontAwesomeIcon icon={ faPlay } className="fa-1x" />Best of 2023</a></li>
                              <li><a href=""><FontAwesomeIcon icon={ faPlay } className="fa-1x" />Nigeria Jams</a></li>
                          </ul>
                      </div>
                  </div>
                  {/*card*/}
                  <div className="sidebar">
                      <div className="sidebar-card-content">
                          <div className="sidebar-img-card mr-5 d-flex">
                              <img src={ sidebar_colum_img } alt="" className="img-fluid"/>
                              <p>Google<br/> Homepad</p>
                          </div>
                          <div className="sidebar-link-card mr-5 d-flex">
                              <p><FontAwesomeIcon icon={ faCopyright } className="fa-1x" />Playing on Device</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Sidebar;