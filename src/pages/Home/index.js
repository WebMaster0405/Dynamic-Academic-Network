import { useEffect, useState } from "react";
import { Styles } from "./styles";
import Button from '@material-ui/core/Button';

import MainCarosuel from "../../component/Carosu/MainCarosu"
import SurveyCarosuel from "../../component/Carosu/SurveyCarosu";
import TestCarosuel from "../../component/Carosu/TestimonCarosu";
import Braincard from "../../component/Home/Brain";
import Eventcard from "../../component/Home/Events";
import Rankcard from "../../component/Home/Rank";
import Surveycard from "../../component/Home/Survey";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Home = () => {
    // rowBrain = () => {
    //     var rows = [];
    //     for (let i = 0; i<6; i++) {
    //         rows.push(<Braincard/>);
    //     }
    //     return rows;
    //  }
    //  rowBrain1 = () => {
    //     var rows = [];
    //     for (let i = 0; i<6; i++) {
    //         rows.push(<Eventcard/>);
    //     }
    //     return rows;
    //  }
    
    return (
        <Styles>
            <MainCarosuel/>
                <div className="brain-part container">
                    <div className="brain-part-size">
                        <div className="brain-card">
                                <div className="d-flex">
                                    <div><img src="assets/images/home_brain.png" alt="" width="30" /></div>
                                    <div className="brain-part-gap">
                                        <p className="title" style={{color:'#EC8001'}}>Brain Power</p>
                                        <p className="general">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.”</p>
                                    </div>
                                </div>
                        </div>
                        <div className="brain-card" style={{marginLeft:'auto'}}>
                                <div className="d-flex">
                                    <div><img src="assets/images/home_pool.png" alt="" width="30" /></div>
                                    <div className="brain-part-gap">
                                        <p className="title" style={{color:'#F68CBB'}}>Research Pool</p>
                                        <p className="general">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.”</p>
                                    </div>
                                </div>
                        </div>
                        <div className="brain-card">
                                <div className="d-flex">
                                    <div><img src="assets/images/home_grant.png" alt="" width="30" /></div>
                                    <div className="brain-part-gap">
                                        <p className="title" style={{color:'#448AE2'}}>Events</p>
                                        <p className="general">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.”</p>
                                    </div>
                                </div>
                        </div>
                        <div className="brain-card" style={{marginLeft:'auto'}}>
                                <div className="d-flex">
                                    <div><img src="assets/images/home_promotion.png" alt="" width="30" /></div>
                                    <div className="brain-part-gap">
                                        <p className="title" style={{color:'#3718B2'}}>Regulations</p>
                                        <p className="general">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.”</p>
                                    </div>
                                </div>
                        </div>
                        <div className="brain-card">
                                <div className="d-flex">
                                    <div><img src="assets/images/home_research.png" alt="" width="30" /></div>
                                    <div className="brain-part-gap">
                                        <p className="title" style={{color:'#D3A500'}}>Research Directions</p>
                                        <p className="general">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.”</p>
                                    </div>
                                </div>
                        </div>
                        <div className="brain-card" style={{marginLeft:'auto'}}>
                                <div className="d-flex">
                                    <div><img src="assets/images/home_group.png" alt="" width="30" /></div>
                                    <div className="brain-part-gap">
                                        <p className="title" style={{color:'#67CB45'}}>Research Group</p>
                                        <p className="general">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.”</p>
                                    </div>
                                </div>
                        </div>
                        <div className="brain-card">
                                <div className="d-flex">
                                    <div><img src="assets/images/home_form.png" alt="" width="30" /></div>
                                    <div className="brain-part-gap">
                                        <p className="title" style={{color:'#5956EC'}}>Form and survey</p>
                                        <p className="general">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.”</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div style={{display:'flex',justifyContent:'center'}}>
                            <button className="read-more" variant="contained" color="primary" disableElevation>Read more</button>
                    </div>
                    <div className="d-flex brain-part-size">
                        <div className="col-2">
                            <p className="title">Partners</p>
                            <p className="general">Description</p>
                        </div>
                        <div className="col-10">
                            <img src="assets/images/partners.png" alt="" width="100%" />
                        </div>
                    </div>
                    <div className="statistic">
                        <p className="title">Statistic</p>
                        <p className="general">Description</p>
                        <img src="assets/images/home_statistic.jpg" alt="" width="100%" />
                    </div>
                </div>
                <div style={{position:'relative'}}>
                    <div className="testimonial">
                        <p className="title" style={{color:'#EBE6F9'}}>Testimonials</p>
                        <p className="general" style={{color:'#EBE6F9', opacity:'0.8'}}>Description</p>
                        <img className="mask" src="assets/images/test_mask.png" alt="" width="100%" />
                        <TestCarosuel/>
                        <img className="mask1" src="assets/images/mask1.png" alt="" width="100%" />
                    </div>
                    
                </div>
                <div className="container join-us">
                    <div className="brain-part-size d-flex">
                        <div className="col-sm-6 girl-gap">
                            <img src="assets/images/home-girlstudent.png" alt="" width="100%" />
                        </div>
                        <div className="col-sm-6 girl-gap">
                            <div>
                                <p className="title">Join Us</p>
                                <p className="general">Description</p>
                            </div>
                            <div className="typed-form">
                                <input placeholder="Name"/><br/>
                                <input placeholder="Email"/><br/>
                                <select name="cars" id="cars">
                                    <option value="Select your role">Volvo</option>                      
                                </select>
                                <input placeholder="Password"/><br/>
                            </div>
                            <div className="join-textpart">
                                <div className="d-flex" style={{justifyContent: 'center', marginBottom:'50px'}}><p className="general" style={{textAlign:'center'}}>Yes, I agree with <span style={{color:'#7256E0'}}>terms and conditions</span></p><input type="checkbox" style={{marginTop:'5px',marginLeft:'10px'}}/></div>
                                <div style={{display:'flex', justifyContent:'center'}}><button className="read-more" variant="contained" color="primary" disableElevation>Join Us</button></div>
                                <div><p className="general" style={{textAlign:'center'}}>By continuing, you are acepted the main organization documents. These are the <span>Terms of Service</span> and <span>Privacy Policy.</span></p></div>
                            </div>
                        </div>
                    </div>
                    <div className="brain-part-size">
                        <div>
                            <p className="title">Brain Power</p>
                            <p className="general">Description </p>
                            <div className="d-flex row">
                                
                                    {[0,1,2,3,4,5,6,7].map((item, index) => (
                                        <div className="col-sm-3">
                                        <Braincard key={index} />
                                        </div>
                                    ))}       
                            </div>
                            <div style={{display:'flex',justifyContent:'center', marginTop:'20px'}}><button className="read-more" variant="contained" color="primary" disableElevation>Show more</button></div>
                        </div>
                    </div>
                </div>
                <div className="event-part">
                    <div className="container">
                        <p className="title">Upcoming Events</p>
                        <p className="general">Description </p>
                        <div className="d-flex row event-part-size">
                            {[0,1,2,3,4,5,6,7].map((item, index) => (
                                <div className="event-card">
                                <Eventcard key={index} />
                                </div>
                            ))}       
                            </div>
                            <div style={{display:'flex',justifyContent:'center', marginTop:'20px'}}><button className="read-more" variant="contained" color="primary" disableElevation>Load more</button></div>
                    </div>               
                </div>
                <div className="rank-part">
                    <div className="container">
                        <div style={{textAlign:'center'}}>
                            <p className="title">University ranking</p>
                            <p className="general">Description </p>
                        </div>
                        <div className="d-flex row event-part-size">
                            {[0,1,2,3,4,5,6,7].map((item, index) => (
                                <div className="teacher-card">
                                <Rankcard key={index} />
                                <img style={{position:'absolute', top:'0',right:'0'}} src={`assets/images/golden${index%3+1}.png`} alt="" width="53" />
                                </div>
                                
                            ))}       
                            </div>
                            
                    </div>               
                </div>
                <div className="rank-part">
                    <div className="container">
                        <div style={{textAlign:'center'}}>
                            <p className="title">Farm and Survey</p>
                            <p className="general">Description </p>
                        </div>
                        <div className="d-flex row event-part-size">
                            {[0,1,2,3,4,5,6,7].map((item, index) => (
                                <div className="farm-card">
                                <Surveycard key={index} />
                                </div>
                                
                            ))}       
                            </div>
                            
                    </div>               
                </div>
                <div>
                    <div className="d-flex row ">
                        <div className="col-sm-5">
                            <div className="contact">
                                <p className="title"  style={{color:'white', opacity:'1'}}>Contact us</p>
                                <p className="general" style={{color:'white', opacity:'0.7'}}>Description</p>
                                <div className="contact-form">
                                    <input placeholder="Name"/><br/>
                                    <input placeholder="Email"/><br/>
                                    
                                </div>
                                <div><button className="btn-send">Send</button></div>
                            </div>
                        </div>
                        <div className="col-sm-7">
                            <img src="assets/images/home_contact.jpg" alt="" width="100%" />
                        </div>
                    </div>
                </div>
        </Styles>
    )
}

export default Home;