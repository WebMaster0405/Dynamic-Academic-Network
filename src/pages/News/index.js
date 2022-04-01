import { useEffect, useState } from "react";
import { Styles } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const News = () => {

    
    return (
        <Styles>
            <div className="container">
                <div className="news-bg">
                    <div className="left-part col-sm-7" style={{marginTop:'10px'}}>
                        <div style={{marginBottom:'30px'}}>
                            <img src="assets/images/news_building.jpg" alt="" width="100%" />
                            <div className="d-flex row" style={{marginTop:'30px'}}>
                                <p className="col-7 title">Lorem ipsum dolor sit</p>
                                <p className="col-3 general" style={{marginTop: '8px'}}>11.11.2021</p>
                                <p className="col-2 general" style={{marginTop: '8px'}}><img src="assets/images/water.png" alt="" width="15" />29k</p>
                            </div>
                            <div>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.”</p>
                            </div>
                            <div>
                                <a className="read">Read more<img src="assets/images/teacher_arrow.png" alt="" width="10" /></a>
                            </div>
                        </div>
                        <div>
                            <img src="assets/images/news_building.jpg" alt="" width="100%" />
                            <div className="d-flex row" style={{marginTop:'30px'}}>
                                <p className="col-7 title">Lorem ipsum dolor sit</p>
                                <p className="col-3 general" style={{marginTop: '8px'}}>11.11.2021</p>
                                <p className="col-2 general" style={{marginTop: '8px'}}><img src="assets/images/water.png" alt="" width="15" />29k</p>
                            </div>
                            <div>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.”</p>
                            </div>
                            <div>
                                <a className="read">Read more<img src="assets/images/teacher_arrow.png" alt="" width="10" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="righft-part col-sm-4">
                        <div style={{marginBottom:'20px'}}>
                            <p className="title">Resent</p>
                            <img src="assets/images/news_book.jpg" alt="" width="100%" />
                            <div style={{marginTop:'30px'}}>
                                <p className="title">Lorem ipsum dolor sit</p>
                                <div className="d-flex row">
                                    <p className="col-3 general" style={{marginTop: '8px'}}>11.11.2021</p>
                                    <p className="col-2 general" style={{marginTop: '8px'}}><img src="assets/images/water.png" alt="" width="15" />29k</p>
                                </div>
                            </div>
                            <div>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.”</p>
                            </div>
                            <div>
                                <a className="read">Read more<img src="assets/images/teacher_arrow.png" alt="" width="10" /></a>
                            </div>
                        </div>
                        <div style={{marginTop:'20px',marginBottom:'20px'}}>
                            <p className="title">Resent</p>
                            <img src="assets/images/news_lecture.jpg" alt="" width="100%" />
                            <div style={{marginTop:'30px'}}>
                                <p className="title">Lorem ipsum dolor sit</p>
                                <div className="d-flex row">
                                    <p className="col-3 general" style={{marginTop: '8px'}}>11.11.2021</p>
                                    <p className="col-2 general" style={{marginTop: '8px'}}><img src="assets/images/water.png" alt="" width="15" />29k</p>
                                </div>
                            </div>
                            <div>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.”</p>
                            </div>
                            <div>
                                <a className="read">Read more<img src="assets/images/teacher_arrow.png" alt="" width="10" /></a>
                            </div>
                        </div>
                        <div style={{marginTop:'20px',marginBottom:'20px'}}>
                            <p className="title">Resent</p>
                            <img src="assets/images/news_bookstore.jpg" alt="" width="100%" />
                            <div style={{marginTop:'30px'}}>
                                <p className="title">Lorem ipsum dolor sit</p>
                                <div className="d-flex row">
                                    <p className="col-3 general" style={{marginTop: '8px'}}>11.11.2021</p>
                                    <p className="col-2 general" style={{marginTop: '8px'}}><img src="assets/images/water.png" alt="" width="15" />29k</p>
                                </div>
                            </div>
                            <div>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.”</p>
                            </div>
                            <div>
                                <a className="read">Read more<img src="assets/images/teacher_arrow.png" alt="" width="10" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div><p>Popular</p></div>
                <div className="news-bg row"  style={{marginBottom:'50px'}}>
                        <div className="news-card">
                            <img src="assets/images/news_book.jpg" alt="" width="100%" />
                            <div style={{marginTop:'30px'}}>
                                <p className="title">Lorem ipsum dolor sit</p>
                                <div className="d-flex row">
                                    <p className="col-5 general" style={{marginTop: '8px'}}>11.11.2021</p>
                                    <p className="col-5 general" style={{marginTop: '8px',marginLeft:'auto'}}><img src="assets/images/water.png" alt="" width="15" />29k</p>
                                </div>
                            </div>
                            <div>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.”</p>
                            </div>
                            <div>
                                <a className="read">Read more<img src="assets/images/teacher_arrow.png" alt="" width="10" /></a>
                            </div>
                        </div>
                        <div className="news-card">
                
                            <img src="assets/images/news_lecture.jpg" alt="" width="100%" />
                            <div style={{marginTop:'30px'}}>
                                <p className="title">Lorem ipsum dolor sit</p>
                                <div className="d-flex row">
                                    <p className="col-5 general" style={{marginTop: '8px'}}>11.11.2021</p>
                                    <p className="col-5 general" style={{marginTop: '8px',marginLeft:'auto'}}><img src="assets/images/water.png" alt="" width="15" />29k</p>
                                </div>
                            </div>
                            <div>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.”</p>
                            </div>
                            <div>
                                <a className="read">Read more<img src="assets/images/teacher_arrow.png" alt="" width="10" /></a>
                            </div>
                        </div>
                        <div className="news-card">
                    
                            <img src="assets/images/news_bookstore.jpg" alt="" width="100%" />
                            <div style={{marginTop:'30px'}}>
                                <p className="title">Lorem ipsum dolor sit</p>
                                <div className="d-flex row">
                                    <p className="col-5 general" style={{marginTop: '8px'}}>11.11.2021</p>
                                    <p className="col-5 general" style={{marginTop: '8px',marginLeft:'auto'}}><img src="assets/images/water.png" alt="" width="15" />29k</p>
                                </div>
                            </div>
                            <div>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.”</p>
                            </div>
                            <div>
                                <a className="read">Read more<img src="assets/images/teacher_arrow.png" alt="" width="10" /></a>
                            </div>
                        </div>
                        <div className="news-card">
                   
                            <img src="assets/images/news_bookstore.jpg" alt="" width="100%" />
                            <div style={{marginTop:'30px'}}>
                                <p className="title">Lorem ipsum dolor sit</p>
                                <div className="d-flex row">
                                    <p className="col-5 general" style={{marginTop: '8px'}}>11.11.2021</p>
                                    <p className="col-5 general" style={{marginTop: '8px',marginLeft:'auto'}}><img src="assets/images/water.png" alt="" width="15" />29k</p>
                                </div>
                            </div>
                            <div>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.”</p>
                            </div>
                            <div>
                                <a className="read">Read more<img src="assets/images/teacher_arrow.png" alt="" width="10" /></a>
                            </div>
                        </div>
                </div>
            </div>
        </Styles>
    )
}

export default News;