import '../home/Home.css';
import {Link} from "react-router-dom";

export default function Home() {

    return (
        <div className="home-container">
            <div className="title-container">
                <h1 className="title">React components template vanilla !</h1>
                <section className="templates-container">
                    <Link className="link" to="/buttons" ><p className="buttons-text">Buttons</p></Link>
                    <Link className="link" to="/footers" ><p className="buttons-text">Footers</p></Link>
                    <Link className="link" to="/" ><p className="buttons-text"> Interactives Maps</p></Link>
                    <Link className="link" to="/navbars" ><p className="buttons-text">Navbars</p></Link>
                    <Link className="link" to="/" ><p className="buttons-text">Contact forms</p></Link>
                </section>
            </div>
        </div>
    )

}