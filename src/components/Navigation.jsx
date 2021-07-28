import React from 'react';
import {Link} from 'react-router-dom'
import logo from "../assets/logo.svg";



const Navigation = () => {
    return (
        <div>
            <nav className='navigation' >
<img src={logo} alt="sportsee logo"/>
<Link to ="/" >Accueil</Link>
<Link to ="/" >Profil</Link>
<Link to ="/" >Réglage</Link>
<Link to ="/" >Communauté</Link>




            </nav>
        </div>
    );
};

export default Navigation;