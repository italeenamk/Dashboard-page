import './style/slider.css';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
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
                      <div className="col-md-6 col-sm-12 text-right">hi</div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Slider;