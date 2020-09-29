import React from 'react'
import '../styles/Header.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {
    return (
        <div className="header">
           <div className="header__left">
            <img src="https://juno-public.s3-us-west-1.amazonaws.com/on-juno.png" alt=""/>
            <div className="header__links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Company</a></li><ExpandMoreIcon/>
                    <li><a href="#">Learn</a></li><ExpandMoreIcon/>
                    <li> <a href="#">Legal</a></li><ExpandMoreIcon/>
                </ul>
            </div>
           </div>
           <div className="header__right">
                <button className="header__login">Login</button>
                <button className="header__signup">Signup</button>
           </div>
        </div>
    )
}

export default Header
