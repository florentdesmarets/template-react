import './Footers.css'
import {Link} from 'react-router-dom'
import {useEffect} from 'react';

export default function Footers() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return (
        <div className="footers-container">
            <Link className="backhome" to="/">Back to Home</Link>
            <div className="footers-text-container">
                <h1 className="footers">All Footers templates</h1>
                <section className="footers-templates-container">
                    <Link className="link" to="/simple-footer" ><p className="buttons-text">simple footer</p></Link>
                    <Link className="link" to="/pro-footer" ><p className="buttons-text">pro footer</p></Link>
                    <Link className="link" to="/design-footer" ><p className="buttons-text">Design footer</p></Link>
                </section>
            </div>
        </div>
    )

}