import './style/card_colum.css';
import profile_img_1 from './imges/dp-1.jpg'
import profile_img_2 from './imges/josh-profile-img1.jpg'
import profile_img_3 from './imges/man-avatar.jpg'
import profile_img_4 from './imges/user-1.jpg'
import profile_img_5 from './imges/user-10.jpg'
import profile_img_6 from './imges/emily-1.jpg'
import {faAngleLeft, faMusic} from "@fortawesome/free-solid-svg-icons";
import { faArrowsTurnRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Card_colum = () => {
  return(
      <>
          <section id="card_colum-content">
              <div className="container-fluid">
                  <div className="row card-colum-row-content">
                      <div className="col-md-8 col-sm-12">
                          <div className="card">
                              <div className="colum-left-content">
                                  <div className="colum-left-card-text-content">
                                      <h3>Top Artists</h3>
                                      <p>See All</p>
                                  </div>
                                  <div className="row">
                                      <div className="col-md-2 col-sm-12">
                                          <div className="colum-left-card-img-text-content">
                                              <img src={ profile_img_1 } alt=""/>
                                              <h3>Travis Scott</h3>
                                              <p>44M Plays</p>
                                          </div>
                                      </div>
                                      <div className="col-md-2 col-sm-12">
                                          <div className="colum-left-card-img-text-content">
                                              <img src={ profile_img_2 } alt=""/>
                                              <h3>Travis Scott</h3>
                                              <p>44M Plays</p>
                                          </div>
                                      </div>
                                      <div className="col-md-2 col-sm-12">
                                          <div className="colum-left-card-img-text-content">
                                              <img src={ profile_img_3 } alt=""/>
                                              <h3>Travis Scott</h3>
                                              <p>44M Plays</p>
                                          </div>
                                      </div>
                                      <div className="col-md-2 col-sm-12">
                                          <div className="colum-left-card-img-text-content">
                                              <img src={ profile_img_4 } alt=""/>
                                              <h3>Travis Scott</h3>
                                              <p>44M Plays</p>
                                          </div>
                                      </div>
                                      <div className="col-md-2 col-sm-12">
                                          <div className="colum-left-card-img-text-content">
                                              <img src={ profile_img_5 } alt=""/>
                                              <h3>Travis Scott</h3>
                                              <p>44M Plays</p>
                                          </div>
                                      </div>
                                      <div className="col-md-2 col-sm-12">
                                          <div className="colum-left-card-img-text-content">
                                              <img src={ profile_img_6 } alt=""/>
                                              <h3>Travis Scott</h3>
                                              <p>44M Plays</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <section className="left-two-colum-card-content">
                              <div className="row">
                                  <div className="col-md-4 col-sm-12">
                                      <div className="left-card-colum-left-content">
                                          <div className="card">
                                              <div className="colum-left-content">
                                                  <div className="colum-left-card-text-content">
                                                      <h3>Genres</h3>
                                                      <p>See All</p>
                                                  </div>
                                                  <div className="left-colum-card-two-box-colum-content">
                                                  <div className="left-colum-card-left-box-content">
                                                      <h3>Dance <br/>Beat</h3>
                                                  </div>
                                                  <div className="left-colum-card-right-box-content">
                                                      <h3>Electro <br/>Pop</h3>
                                                  </div>
                                              </div>
                                              </div>
                                              <div className="colum-left-content">
                                                  <div className="left-colum-card-two-box-colum-content">
                                                      <div className="left-colum-card-left-box-content-two">
                                                          <h3>Alternative <br/>Indie</h3>
                                                      </div>
                                                      <div className="left-colum-card-right-box-content-two">
                                                          <h3>Hip Hop</h3>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="colum-left-content">
                                                  <div className="left-colum-card-two-box-colum-content">
                                                      <div className="left-colum-card-left-box-content-one">
                                                          <h3>Classical <br/>Period</h3>
                                                      </div>
                                                      <div className="left-colum-card-right-box-content-one">
                                                          <h3>Hip Hop <br/>Pap</h3>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-8 col-sm-12">
                                      <div className="left-card-colum-left-content">
                                          <div className="card">
                                              <div className="colum-left-content">
                                                  <div className="colum-left-card-text-content">
                                                      <h3>Top Charts</h3>
                                                      <p>See All</p>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </section>
                      </div>
                      <div className="col-md-4 col-sm-12">
                          <div className="card">
                              <div className="colum-left-content">
                                  <div className="colum-left-card-text-content">
                                      <h3>Player</h3>
                                      <p>
                                          <FontAwesomeIcon icon={ faMusic } className="fa-1x" />
                                      </p>
                                  </div>
                                  <div className="row">
                                      <div className="col-md-12 col-sm-12 text-center">
                                          <div className="right-colum-card-content">
                                              <img src={ profile_img_1 } alt=""/>
                                              <h1>Butterfly Effect</h1>
                                              <h3>Travis Scott</h3>
                                              <p>Best of 2023</p>
                                          </div>
                                          <section id="play-row-content">
                                              <div className="row">
                                                  <div className="col-md-2 col-sm-6 text-white">
                                                      <div className="right-colum-card-play-content">
                                                          <span>2:45</span>
                                                      </div>
                                                  </div>
                                                  <div className="col-md-8 col-sm-6">
                                                      <div className="right-colum-card-input-content">
                                                          <input  type="range" className="form-control-range slider"/>
                                                      </div>
                                                  </div>
                                                  <div className="col-md-2 col-sm-12 text-white">
                                                      <div className="right-colum-card-play-content">
                                                          <span>1:02</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </section>
                                          <section id="video-play-content">
                                              <div className="row">
                                                  <div className="col-md-4 col-sm-12 text-white">
                                                      <div className="right-video-play-display-content">
                                                          <div className="video-play-icon-content">
                                                              <FontAwesomeIcon icon={ faArrowsTurnRight } className="fa-1x" />
                                                          </div>
                                                          <div className="video-play-icon-content">
                                                              <FontAwesomeIcon icon={ faArrowAltCircleLeft } className="fa-1x" />
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="col-md-4 col-sm-12 right-colum-card-icon-colum ">
                                                      <div className="right-colum-card-play-btn-content">
                                                          <FontAwesomeIcon icon={ faPlay } className="fa-1x" />
                                                      </div>
                                                      <div className="right-colum-card-up-text-content text-white">
                                                          <FontAwesomeIcon icon={ faArrowUpFromBracket } className="fa-1x" />
                                                          <h4>LYRICS</h4>
                                                      </div>
                                                  </div>
                                                  <div className="col-md-4 col-sm-12 text-white">
                                                      <div className="right-video-play-display-content">
                                                          <div className="video-play-icon-content">
                                                              <FontAwesomeIcon icon={ faArrowAltCircleRight } className="fa-1x" />
                                                          </div>
                                                          <div className="video-play-icon-content">
                                                              <FontAwesomeIcon icon={ faRemove } className="fa-1x" />
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </section>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Card_colum;