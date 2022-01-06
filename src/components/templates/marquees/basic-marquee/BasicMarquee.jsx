import './BasicMarquee.css'
import {Link} from 'react-router-dom'
import {useEffect} from 'react';

export default function BasicMarquee() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return (
        <div className="b-marquee-container">
            <Link className="backhome" to="/marquees">Back to Marquees</Link>
        </div>
    )

}