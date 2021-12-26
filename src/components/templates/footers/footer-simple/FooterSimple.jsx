import './FooterSimple.css'
import {Link} from 'react-router-dom'

export default function FooterSimple() {

    return (
        <div className="footer-simple-container">
            <Link className="backtofooters" to="/footers"> Back to Footers</Link>
            <div className="footer-simple-text-container">
                <p className="footer-simple-text">Made by Florent DESMARETS © 2021</p>
            </div>
        </div>
    )
}