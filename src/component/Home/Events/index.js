
import { useEffect, useState } from "react";
import { Styles } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Events = () => {

    
    return (
        <Styles>
                <img src="assets/images/home_classtudents.png" alt="" width="100%" />
                <div className="card-text">
                    <p className="title">Name of the event</p>
                    <div className="d-flex general">
                        <p><img src="assets/images/dial.png" alt="" width="22" />14 Oct 1887</p>
                        <p style={{marginLeft:'auto'}}><img src="assets/images/clock.png" alt="" width="22" />18:00</p>
                    </div>
                    <p className="general"><img src="assets/images/water.png" alt="" width="22" />Avenue, NYC</p>
                </div>
        </Styles>
    )
}

export default Events;