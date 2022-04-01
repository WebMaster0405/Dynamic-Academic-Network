import { useEffect, useState } from "react";
import { Styles } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Serve = () => {

    
    return (
        <Styles>
            <img src="assets/images/whowe.jpg" alt="" width="100%" />
            <div style={{marginTop:"30px"}}>
                
                <div className="container">
                    <p className="title">Aim</p>
                    <p className="middle">Description </p>
                    <p className="general">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque.
Fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam.</p>
                </div>
            </div>
        </Styles>
    )
}

export default Serve;