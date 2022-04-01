import { Styles } from "./styles";
const Teachers = () => {
    return (
        <Styles>
            <div className="container teachers-part">
                <div className="d-flex">
                    <img src="assets/images/home_events.png" alt="" width="100" />
                    <img className="golden" src="assets/images/golden1.png" alt="" width="70" />
                </div>
                <div>
                    <p className="title">№ 1 in TOP 100 by teachers</p>
                    <p className="general">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <div className="read-position"><a>Read more<img src="assets/images/teacher_arrow.png" alt="" width="10" /></a></div>
                </div>
                <div className="d-flex">
                    <div className="col-3">
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                        <label for="html">Lorem ipsum dolor sit amet.</label><br></br>
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                        <label for="html">Lorem ipsum dolor sit amet.</label><br></br>
                    </div>
                    <div className="col-9">
                        <img src="assets/images/btn_groups.png" alt="" width="100%" />
                    </div>
                </div>
            </div>
        </Styles>
    )
}

export default Teachers;