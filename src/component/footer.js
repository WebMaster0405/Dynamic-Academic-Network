import { Styles } from './Carosu/styles';
export default function Footer() {
    return (
        <Styles>
            <div style={{ background: '#182522', height: ' 205px', width: '100%' }}>
                <div className="container footer-bg">
                    <div>
                        <div className="d-flex">
                            <div><button className="btn-logofooter">Logo</button></div>
                            <div>
                                <div className='d-flex link-footer'>
                                    <div>
                                        <a href='/'>Home</a>
                                        <p><a href='/english-tour'>English Tour</a></p>
                                    </div>
                                    <div className="footer-menu">
                                        <a href='/who-we-are'>Who we are?</a><br/>
                                        <a href='/take-tour'>Take a Tour</a><br/>
                                        <a href='/news'>News</a><br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-socials d-flex">
                        <div><button className="btn-signup">Sign up</button></div>
                        <div>
                            <img src="assets/images/facebook.png" className="social-gap" alt="" width="33" />
                            <img src="assets/images/instagram.png" className="social-gap"  alt="" width="33" />
                            <img src="assets/images/dolbid.png" className="social-gap"  alt="" width="33" />
                        </div>
                    </div>
                </div>
            </div>
        </Styles>
    );
}