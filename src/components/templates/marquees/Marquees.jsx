import './Marquees.css'
import {Link} from 'react-router-dom'
import {useEffect} from 'react';

export default function Marquees() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return (
        <div className="marquees-container">
            <Link className="backhome" to="/">Back to Home</Link>
            <div className="marquees-text-container">
                <h1 className="marquees">All Marquees templates</h1>
                <section className="marquees-templates-container">
                    <Link className="link" to="/basic-marquee" ><p className="buttons-text">Basic Marquee</p></Link>
                </section>
            </div>
        </div>
    )

}