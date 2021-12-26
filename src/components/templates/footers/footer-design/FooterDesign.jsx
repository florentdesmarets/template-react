import './FooterDesign.css'
import {Link} from 'react-router-dom'

export default function FooterDesign() {

    return (
        <div className="footer-design-container">
            <Link className="backtofooters" to="/footers"> Back to Footers</Link>
            <footer className="footer-design">
                <section className="footer-contact">
                    <div className="footer-contact-sub-sec">
                        <img className="footer-contact-pic" src="https://github.com/florentdesmarets/Image-storage/blob/main/Templates%20Website/map-pointer.png?raw=true" alt="footer-pic" />
                        <div className="footer-contact-text">
                            <h4 className="sub-title">Find us </h4>
                            <p className="sub-text">10 rue de la banane 75000 Paris</p>
                        </div>
                    </div>
                    <div  className="footer-contact-sub-sec">
                        <img className="footer-contact-pic" src="https://github.com/florentdesmarets/Image-storage/blob/main/Templates%20Website/phone-call.png?raw=true" alt="footer-pic" />
                        <div className="footer-contact-text" >
                            <h4 className="sub-title">Call us </h4>
                            <p className="sub-text">0284526789</p>
                        </div>
                    </div>
                    <div  className="footer-contact-sub-sec">
                        <img className="footer-contact-pic" src="https://github.com/florentdesmarets/Image-storage/blob/main/Templates%20Website/email.png?raw=true" alt="footer-pic" />
                        <div className="footer-contact-text"> 
                            <h4 className="sub-title">Mail us </h4>
                            <p className="sub-text">florent.desmarets@gmail.com</p>
                        </div>
                    </div>
                </section>
                <div className="line"></div>
                <section className="footer-content-container">
                    <div className="footer-content">
                        <img className="logo-website" src="https://github.com/florentdesmarets/Image-storage/blob/main/Templates%20Website/logo-bidon.png?raw=true" alt="logo website" />
                        <p className="sub-text">Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing elit,Lorem ipsum dolor sit amet.</p>
                        <h4 className="sub-title">Follow us</h4>
                        <div className="links-logo-container">
                            <a className="link-sn" href="#"><img className="sn-logo" src="https://github.com/florentdesmarets/Image-storage/blob/main/Templates%20Website/facebook-logo.png?raw=true" alt="logo fb" /></a>
                            <a className="link-sn"  href="#"><img className="sn-logo" src="https://github.com/florentdesmarets/Image-storage/blob/main/Templates%20Website/twitter.png?raw=true" alt="logo twitter" /></a>
                            <a className="link-sn" href="#"><img className="sn-logo" src="https://github.com/florentdesmarets/Image-storage/blob/main/Templates%20Website/google-plus.png?raw=true" alt="logo google +" /></a>
                        </div>
                    </div>
                    <div className="footer-content">
                        <h4 className="sub-title">Usefull Links</h4>
                        <div className="mini-line"></div>
                        <div className="links-under-contain">
                            <div className="links-container">
                                <a className="footer-links" href="">Home</a>
                                <a className="footer-links" href="">Services</a>
                                <a className="footer-links" href="">Contact</a>
                                <a className="footer-links" href="">Our Services</a>
                                <a className="footer-links" href="">Contact Us</a>
                            </div>
                            <div className="links-container">
                                <a className="footer-links" href="">About</a>
                                <a className="footer-links" href="">Portfolio</a>
                                <a className="footer-links" href="">About us</a>
                                <a className="footer-links" href="">Expert Team</a>
                                <a className="footer-links" href="">Latest View</a>
                            </div>   
                        </div>            
                    </div>
                    <div className="footer-content">
                        <h4 className="sub-title" >Subscribe</h4>
                        <div className="mini-line"></div>
                            <p className="sub-text">Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                        <form className="form-nl-container" action="#">
                            <input  className="form-nl" type="text" placeholder="Email Address"/>
                            <button className="btn-nl"><img className="paper-plane" src="https://github.com/florentdesmarets/Image-storage/blob/main/Templates%20Website/paper-plane.png?raw=true" alt="Placeholder"/></button>
                        </form>
                    </div>
                </section>
            </footer>
            <section className="copyright-area-container">
                <div className="copyright-area">
                    <div className="copyright-sub">
                       <p className="sub-text">Copyright © 2021, All Right Reserved</p>
                       <a className="footer-links" href="http://">&nbsp;Florent desmarets</a>  
                    </div>
                    <div className="copyright-sub">
                        <a className="copy-links" href="http://">Home</a>
                        <a className="copy-links" href="http://">Therms</a>
                        <a className="copy-links" href="http://">Privacy</a>
                        <a className="copy-links" href="http://">Policy</a>
                        <a className="copy-links" href="http://">Contact</a>          
                    </div>
                </div>
            </section>
        </div>
    )
}