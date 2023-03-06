import Sidebar from "./Sidebar";
import './style/sidebar.css';
import './style/main_colum.css';
import Navbar from "./Navbar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import Slider from "./Slider";



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
                              <div className="">
                                  <h1>hello</h1>
                                  <h1>hello</h1>
                                  <h1>hello</h1>
                                  <h1>hello</h1>
                                  <h1>hello</h1>
                                  <h1>hello</h1>
                                  <h1>hello</h1>
                                  <h1>hello</h1>
                                  <h1>hello</h1>
                                  <h1>hello</h1>
                                  <h1>hello</h1>
                                  <h1>hello</h1>
                                  <h1>hello</h1>
                                  <h1>hello</h1>
                                  <h1>hello</h1>
                                  <h1>hello</h1>
                                  <h1>hello</h1>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/*<div className="main-content">*/}
          {/*    /!*left*!/*/}
          {/*    <div className="left-content">*/}
          {/*        /!*<a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"*!/*/}
          {/*        /!*   aria-controls="offcanvasExample">*!/*/}
          {/*        /!*    Link with href*!/*/}
          {/*        /!*</a>*!/*/}
          {/*        /!*<button className="btn btn-primary" type="button" data-bs-toggle="offcanvas"*!/*/}
          {/*        /!*        data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">*!/*/}
          {/*        /!*    Button with data-bs-target*!/*/}
          {/*        /!*</button>*!/*/}

          {/*        <div className="offcanvas offcanvas-start sidebar-nav" tabIndex="-1" id="offcanvasExample"*/}
          {/*             aria-labelledby="offcanvasExampleLabel">*/}
          {/*            <div className="offcanvas-header">*/}
          {/*                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>*/}
          {/*                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"*/}
          {/*                        aria-label="Close"></button>*/}
          {/*            </div>*/}
          {/*            <div className="offcanvas-body">*/}
          {/*                <div>*/}
          {/*                    Some text as placeholder. In real life you can have the elements you have chosen. Like,*/}
          {/*                    text, images, lists, etc.*/}
          {/*                </div>*/}
          {/*                <div className="dropdown mt-3">*/}
          {/*                    <button className="btn btn-secondary dropdown-toggle" type="button"*/}
          {/*                            data-bs-toggle="dropdown">*/}
          {/*                        Dropdown button*/}
          {/*                    </button>*/}
          {/*                    <ul className="dropdown-menu">*/}
          {/*                        <li><a className="dropdown-item" href="#">Action</a></li>*/}
          {/*                        <li><a className="dropdown-item" href="#">Another action</a></li>*/}
          {/*                        <li><a className="dropdown-item" href="#">Something else here</a></li>*/}
          {/*                    </ul>*/}
          {/*                </div>*/}
          {/*            </div>*/}
          {/*        </div>*/}
          {/*    </div>*/}
          {/*    /!*right*!/*/}
          {/*    <div className="right-content">*/}
          {/*        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"*/}
          {/*                data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">*/}
          {/*            Button with data-bs-target*/}
          {/*        </button>*/}
          {/*    </div>*/}
          {/*</div>*/}
      </>
  )
}

export default Colum_bar;