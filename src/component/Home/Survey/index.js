
import { useEffect, useState } from "react";
import { Styles } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Survey = () => {
    return (
        <Styles>
            <div className="survey-card">
                <div className="d-flex">
                    <img src="assets/images/survey_shape.png" alt="" width="60" />
                    <img style={{marginLeft:'auto'}} src="assets/images/survey-right.png" alt="" width="150" />
                </div>
                <p className="title">Title of survey</p>
                <p className="general">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                <button className="btn-pass">Pass</button>
            </div>
        </Styles>
    )
}

export default Survey;