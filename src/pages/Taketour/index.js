import { useEffect, useState } from "react";
import { Styles } from "./styles"
const Taketour = () => {
    return (
        <Styles>
            <div className="bg-part">
                <img src="assets/images/news-bg.jpg" alt="" width="100%" />
            </div>
            <div className="d-flex row">
                <a className="fas fa-angle-left"></a>
            </div>
            <div className="container features-part">
                <p className="subject">Features</p>
                <img src="assets/images/taketour_feature.png" alt="" width="100%" />
                <div className="Top row">
                    <div className="col-sm-3 col-xs-6">
                        <div className="dolor-part1">
                            <p className="topic">1</p>
                            <p className="title">Lorem ipsum dolor sit</p>
                            <p className="text-content">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.”</p>
                        </div>
                    </div>
                    <div className="col-sm-3 col-xs-6">
                        <div className="dolor-part2">
                            <p className="title">Lorem ipsum dolor sit</p>
                            <p className="text-content">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.”</p>
                            <p className="topic-color">2</p>
                        </div>
                    </div>
                    <div className="col-sm-3 col-xs-6">
                        <div className="dolor-part3">
                            <p className="topic-color">3</p>
                            <p className="title">Lorem ipsum dolor sit</p>
                            <p className="text-content">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.”</p>
                        </div>    
                    </div>
                    <div className="col-sm-3 col-xs-6">
                        <div className="dolor-part4">
                            <p className="title">Lorem ipsum dolor sit</p>
                            <p className="text-content">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.”</p>
                            <p className="topic-color">4</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container features-part features-belowpart">
                <img src="assets/images/taketour_feature.png" alt="" width="100%" />
                <div className="Top row">
                    <div className="col-sm-3 col-xs-6">
                        <div className="dolor-part5">
                            <p className="topic-color">5</p>
                            <p className="title">Lorem ipsum dolor sit</p>
                            <p className="text-content">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.”</p>
                        </div>
                    </div>
                    <div className="col-sm-3 col-xs-6">
                        <div className="dolor-part6">
                            <p className="title">Lorem ipsum dolor sit</p>
                            <p className="text-content">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.”</p>
                            <p className="topic-color">6</p>
                        </div>
                    </div>
                    <div className="col-sm-3 col-xs-7">
                        <div className="dolor-part7">
                            <p className="topic-color">7</p>
                            <p className="title">Lorem ipsum dolor sit</p>
                            <p className="text-content">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.”</p>
                        </div>    
                    </div>
                    <div className="col-sm-3 col-xs-8">
                        <div className="dolor-part8">
                            <p className="title">Lorem ipsum dolor sit</p>
                            <p className="text-content">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.”</p>
                            <p className="topic-color">8</p>
                        </div>
                    </div>
                </div>
            </div>
        </Styles>
    )
}

export default Taketour;