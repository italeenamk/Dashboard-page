import './style/navbar.css';
import './style/mobile_screen.css';
import { faList} from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import sidebar_colum_img from "./imges/man-avatar.jpg";


const Navbar = () => {
  return(
      <>
          <section id="navBar">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-1 col-sm-12">
                          <button className="navbar-toggler  text-white" type="button" data-bs-toggle="offcanvas"
                                  data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                              <FontAwesomeIcon icon={ faList } className="fa-1x" />
                          </button>
                      </div>
                      <div className="col-md-3 col-sm-12 text-left">
                                  <div className="navbar-nav-list">
                                      <ul>
                                          <li><a href="">MUSIC</a></li>
                                          <li><a href="">PODCAST</a></li>
                                          <li><a href="">LIVE</a></li>
                                      </ul>
                                  </div>
                              </div>
                      <div className="col-md-3 col-sm-12">
                                  <div className="nabvar-input-content">
                                      <form>
                                          <div className="input-group mb-3">
                                              <div className="input-group-prepend">
                                          <span className="input-group-text text-white">
                                              <FontAwesomeIcon icon={ faSearch } className="fa-1x" />
                                          </span>
                                              </div>
                                              <input type="text" className="form-control" placeholder="Type here to search"/>
                                          </div>
                                      </form>
                                  </div>
                              </div>
                      <div className="col-md-5 col-sm-12">
                                  <div className="navbar-img-icon-list">
                                      <ul>
                                          <li><FontAwesomeIcon icon={ faBell } className="fa-1x" /><span className="online"></span></li>
                                          <li><FontAwesomeIcon icon={ faServer } className="fa-1x" /></li>
                                          <div>
                                              <div className="navbar-list-content">
                                                  <div className="navbar-card-content">
                                                      <div className="navbar-img-card mr-5 d-flex">
                                                          <div className="navbar-img-background-content">
                                                              <img src={ sidebar_colum_img } alt="" className="img-fluid"/>
                                                          </div>
                                                          <p>Dave Cooper</p>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </ul>
                                  </div>
                              </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Navbar;