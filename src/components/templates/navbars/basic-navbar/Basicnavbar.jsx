import './Basicnavbar.css'
import {Link} from 'react-router-dom'
import {useState} from 'react'

export default function BasicNavbar() {
    const [openMenu, setOpenMenu]= useState(false)
    const changeOpenMenu=() =>setOpenMenu(!openMenu)

    return (
        <div className="basic-navbar-container">
            <Link className="backhome" to="/navbars">Back to Home</Link>
                 <section className="basic-nav">
                     <Link className="link" to="/"><img className="img-logo"src="" alt="img-logo" /></Link>
                     <div className="basic-burger"onClick={changeOpenMenu}>
                         <span className={openMenu ? "cross-1" : "cross-4" }></span>
                         <span className={openMenu ? "cross-2" : "cross-5" }></span>
                         <span className={openMenu ? "cross-3" : "cross-6" }></span>
                     </div>
                </section>
                <div className={openMenu ? "menu-open" : "menu-close"}>
                    <div className="basic-links-container">
                        <h3 className="bijour">bijour</h3>
                        <h3 className="bijour">bijour</h3>
                        <h3 className="bijour">bijour</h3>
                    </div>
                </div>
        </div>
    )

}