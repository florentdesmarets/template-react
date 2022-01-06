import '../home/Home.css';
import React from 'react';
import {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import ButtonFour from '../templates/buttons/button-four/ButtonFour'
import ButtonFive from '../templates/buttons/button-five/ButtonFive';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


    // to do list: 
    // -add responsive
    // -create and add Components
    // -deploy (maybe)

export default function Home() {

       // this useEffect set  userview to top of screen when page is loaded

       useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

      //used to scroll to a part of page smoothly

      const handleClick =() => {
        window.scroll({
            top: 1500,
            left: 0,
            behavior: 'smooth'
          });     
    }

    //filter components list 

   const [search, setSearch] = useState('')
   const [filtered, setFiltered] = useState([])

   React.useEffect(() => {
    search && setFiltered(links.filter(link => link.name.toLowerCase().includes(search.toLowerCase())));
    !search && setFiltered([])
  }, [search]);


    const links = [
        { id: '1', name: 'Buttons', link: '/buttons' },
        { id: '2', name: 'Footers', link: '/footers' },
        { id: '3', name: 'Interactive Maps', link: '/intermaps' },
        { id: '4', name: 'NavBars', link: '/navbars' },
        { id: '5', name: 'Forms', link: '/forms' },
        { id: '6', name: 'Spiners', link: '/' },
        { id: '7', name: 'Carousels', link: '/' },
        { id: '8', name: 'Marquees', link: '/marquees' },
        { id: '9', name: 'Search Bars', link: '/' },
    ];


    return (
        <div className="home-container">
            <div className="title-container">
                <h1 className="title">React components templates!</h1>
                <section className="why-this-website">
                    <div className="first-text-container">
                        <h2 className="why-title">Why this website ?</h2>
                        <p className="why-text">
                        Here i want to fastest make accessible all react recurrent components as simple as possible for myself and another begginers. If you want to take a look at the components you can access them right now by scrolling down.
                        If you want to recover these templates I invite you to fork the github repo, Enjoy!
                        </p>
                        <div className="why-link-container">
                            <a className="why-link" href="https://github.com/florentdesmarets/template-react" target="_blank">
                                <ButtonFour name="Get in Github" />
                            </a>
                        </div>                       
                    </div>
                    <div className="carousel-container"> 
                            <Carousel showArrows={false} nextArrowTemplates={true} useKeyboardArrows={true}  showStatus={false} showThumbs={false} autoPlay={true}   infiniteLoop={true}   >
                                <div>
                                    <img className="carousel-pic" src="https://github.com/florentdesmarets/Image-storage/blob/main/Templates%20Website/welcome.png?raw=true" alt="welcome" />
                                </div>
                                <div>
                                    <img className="carousel-pic" src="https://github.com/florentdesmarets/Image-storage/blob/main/Templates%20Website/dev.png?raw=true" alt="dev" />
                                </div>
                                <div>
                                    <img className="carousel-pic" src="https://github.com/florentdesmarets/Image-storage/blob/main/Templates%20Website/fun.png?raw=true" alt="fun"/>
                                </div>
                            </Carousel>
                    </div>
                </section>
                <section className="discover-container">
                    <a className="why-link" onClick={handleClick}>
                        <ButtonFive name="Discover it !" />
                    </a>
                </section>
                <section className="little-things">
                    <h2 className="truc">Simple💡</h2>
                    <h2 className="truc">For Begginers 👨‍💻 by Begginer</h2>
                    <h2 className="truc">It's 🆓 what else ?</h2>
                </section>
                <h2 style={{ fontSize:'3rem', color: 'white' }}>All Components templates </h2>
                <div id="search" className="search-container">
                
                <section className="search-bar-container">
                    <form action="/" method="get">
                        <label htmlFor="header-search"></label>
                        <input
                            onChange={e => setSearch(e.target.value)}
                            value={search}
                            type="text"
                            id="header-search"
                            placeholder="Search Component"
                            name="s" 
                        />
                    </form>
                </section>
                </div>
                <section className="templates-container">
                    {filtered.length > 0 ?
                    
                    filtered.map((link) => (                    
                        <Link key={link.id} className="link" to={link.link}><p className="buttons-text">{link.name}</p></Link>
                    )) :
                    links.map((link) => (                    
                        <Link key={link.id} className="link" to={link.link}><p className="buttons-text">{link.name}</p></Link>
                    ))
                    }
                </section>
                <section className="white-path"></section>
            </div>
        </div>
    )

}