import './Navbars.css'
import {Link} from 'react-router-dom'

export default function Navbars() {

    return (
        <div className="navbars-container">
            <Link className="backhome" to="/">Back to Home</Link>
            <div className="navbars-text-container">
                <h1 className="navbars">All Navbars templates</h1>
                <section className="navbars-templates-container">
                   <Link className="link" to="/basicnav" ><p className="buttons-text">Basic Navbar</p></Link>
                </section>
            </div>
        </div>
    )

}