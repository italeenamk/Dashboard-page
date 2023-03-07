import './style/slider.css';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Slider = () => {
  return(
      <>
          <section id="slider-content">
              <h2>Trendings New Hits</h2>
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-6 col-sm-12">
                          <div className="slider-text-content">
                              <h1>In My Feelings</h1>
                              <div className="slider-text-display-content">
                                  <h3>Camila Cabello</h3>
                                  <p>63Million Plays</p>
                              </div>
                              <div className="slider-btn-icon-display-content">
                                  <button className="btn">Listen Now</button>
                                  <span><FontAwesomeIcon icon={ faHeart } className="fa-1x" /></span>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6 colum-right-content col-sm-12 text-right">
                          <div className="slider-right-content">
                              <div className="slider-right-dott-content">
                                  <span className="slider-right-span-content"></span>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                              </div>
                              <div className="slider-left-right-content">
                                  <FontAwesomeIcon icon={ faArrowLeft } className="fa-1x" />
                                  <FontAwesomeIcon icon={ faArrowRight } className="fa-2x" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Slider;