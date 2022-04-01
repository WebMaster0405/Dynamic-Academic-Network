import { Styles } from "./styles";
const SignIn = () => {
    return (
        <Styles>
            <img src="assets/images/sign.jpg" alt="" width="100%" />
            <div className="container sign-part">
                <p className="title">Title of survey</p>
                <div className="d-flex">
                    <div className="col-7">
                        <div className="sign-left">
                            <div>                     
                                <p className="general">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="sign-right">
                            <div className="contact-form">
                                <input placeholder="Login"/><br/>
                                <input placeholder="Password"/><br/>     
                            </div>
                            <div className="read-position"><button className="read-more" variant="contained" color="primary" disableElevation>Read more</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </Styles>
    )
}

export default SignIn;