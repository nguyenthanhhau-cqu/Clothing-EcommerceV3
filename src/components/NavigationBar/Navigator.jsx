import React from "react";
import {ReactComponent as Logo} from '../LogoSVG/crown.svg';
import {Link} from "react-router-dom";
import './NavigatorStyles.scss'

const Navigator = () => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'/>
        </Link>
        <div className='options' >
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>

        </div>
    </div>
)
export default Navigator;