import './InterMaps.css'
import {Link} from 'react-router-dom'
import {useEffect} from 'react'

export default function InterMaps() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return (
        <div className="inter-maps-container">
            <Link className="backhome" to="/">Back to Home</Link>
            <div className="inter-maps-text-container">
                <h1 className="inter-maps">All Maps templates</h1>
                <section className="inter-maps-templates-container">
                   <Link className="link" to="/intermap" ><p className="buttons-text">Intermap</p></Link>
                </section>
            </div>
        </div>
    )

}