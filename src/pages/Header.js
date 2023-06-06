import React, {useEffect, useState} from 'react'
import myImage from '../assets/img/logo-light.png';
import { BsList } from 'react-icons/bs';
export default function Header() {

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScroll(isScrolled);
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    const headerClass = scroll ? 'navbar navbar-expand-lg fixed-top sticky nav-sticky' : 'navbar navbar-expand-lg fixed-top sticky';
    
    return (
        <div>

            <nav className={headerClass} id="navbar">
                <div className="container">
                    <a className="navbar-brand logo text-uppercase" target="_blank" href="https://1.envato.market/themesdesign">
                        <img src={myImage} className="logo-light" alt="logo-light" height="28" />
                    </a>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <BsList style={{color:'#fff'}}/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ms-auto navbar-center">
                            <li className="nav-item">
                                <a href="#home" className="nav-link active"> Uy</a>
                            </li>
                            <li className="nav-item" >
                                <a href="#demos" className="nav-link">Demolar</a>
                            </li>
                            <li className="nav-item">
                                <a href="#features" className="nav-link">Xususiyatlari</a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="nav-link">Aloqa</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
