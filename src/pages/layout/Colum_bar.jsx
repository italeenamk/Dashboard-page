import Sidebar from "./Sidebar";
import './style/sidebar.css';
import './style/main_colum.css';
import Navbar from "./Navbar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import Slider from "./Slider";
import Card_colum from "./Card_colum";



const Colum_bar = () => {
  return(
      <>
          <section id="main-content">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-2">
                          <div className="left-content">
                              <div className="offcanvas offcanvas-start sidebar-nav" tabIndex="-1" id="offcanvasExample"
                                   aria-labelledby="offcanvasExampleLabel">
                                  <Sidebar/>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-10">
                          <div className="right-content">
                              <Navbar/>
                              <Slider/>
                              <Card_colum/>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Colum_bar;