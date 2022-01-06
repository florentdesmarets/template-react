import './Forms.css'
import {Link} from 'react-router-dom'
import {useEffect} from 'react';

export default function Forms() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return (
        <div className="forms-container">
            <Link className="backhome" to="/">Back to Home</Link>
            <div className="forms-text-container">
                <h1 className="forms">All Forms templates</h1>
                <section className="forms-templates-container">
                   <Link className="link" to="/styled-form" ><p className="buttons-text">Styled Form</p></Link>
                </section>
            </div>
        </div>
    )

}