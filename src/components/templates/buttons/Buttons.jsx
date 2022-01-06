import '../buttons/Buttons.css';
import {Link} from 'react-router-dom'
import {useEffect} from 'react'
import ButtonOne from './button-one/ButtonOne'
import ButtonTwo from './button-two/ButtonTwo'
import ButtonThree from './button-three/ButtonThree'
import ButtonFour from './button-four/ButtonFour'
import ButtonFive from './button-five/ButtonFive'
import ButtonSix from './button-six/ButtonSix'

export default function Buttons() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return (
        <div className="buttons-container">
            <Link className="backhome" to="/">Back to Home</Link>
            <div className="buttons-text-container">
                <h1 className="buttons">All Buttons templates</h1>
                <section className="buttons-templates-container">
                    <ButtonOne name="Button swipe color"/>
                    <ButtonTwo name="Button scale with border"/>
                    <ButtonThree name="Button box shadow behind"/>
                    <ButtonFour name="Button slide"/>
                    <ButtonFive name="Button press" />
                    <ButtonSix name="🔎" />
                </section>
            </div>
        </div>
    )

}