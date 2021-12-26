import './FooterPro.css'
import { Link } from 'react-router-dom'

export default function FooterPro() {

    return (
        <div className="footer-pro-container">
            <Link className="backtofooters" to="/footers"> Back to Footers</Link>
            <section className="pro-section">
                <div className="pro-footer-container">
                    <div className="pro-sous-section">
                        <h3 className="pro-sous-title">About</h3>
                        <p className="pro-text-para">lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
                    </div>
                    <div className="pro-sous-section">
                        <h3  className="pro-sous-title">Categories</h3>
                        <a href="placeholder" className="pro-text"> lorem ipsum</a>
                        <a href="placeholder"className="pro-text"> lorem ipsum</a>
                        <a href="placeholder"className="pro-text"> lorem ipsum</a>
                        <a href="placeholder"className="pro-text"> lorem ipsum</a>
                    </div>
                    <div className="pro-sous-section">
                        <h3  className="pro-sous-title">Quick Links</h3>
                        <a href="placeholder"className="pro-text"> lorem ipsum</a>
                        <a href="placeholder"className="pro-text"> lorem ipsum</a>
                        <a href="placeholder"className="pro-text"> lorem ipsum</a>
                        <a href="placeholder"className="pro-text"> lorem ipsum</a>
                    </div>
                </div>
                <div className="line"></div>
                <div className="pro-sous-section-container">
                    <p className="pro-text-para">Copyright © 2021 All Rights Reserved by florent desmarets.  </p>
                    <div>
                        <img className="mini-logo" src="https://github.com/florentdesmarets/Image-storage/blob/main/Portfolio%20Website/github.png?raw=true" alt="github"/>
                        <img className="mini-logo" src="https://github.com/florentdesmarets/Image-storage/blob/main/Portfolio%20Website/linkedin.png?raw=true" alt="linkedin"/>
                        <img className="mini-logo" src="https://github.com/florentdesmarets/Image-storage/blob/main/Portfolio%20Website/instagram(3).png?raw=true" alt="instagram"/>
                        <img className="mini-logo" src="https://github.com/florentdesmarets/Image-storage/blob/main/Portfolio%20Website/facebook(3).png?raw=true" alt="facebook"/>
                    </div>
                </div>
            </section>
        </div>
    )
}