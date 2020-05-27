import React from "react"
import logo from './images/logo.svg'
import faceBook from './images/icon-facebook.svg'
import youtube from './images/icon-youtube.svg'
import twitter from './images/icon-twitter.svg'
import instagram from './images/icon-instagram.svg'
import pinterest from './images/icon-pinterest.svg'

function Footer() { 
    return (
        <footer>
            <img src={logo} alt="logo" />
            <br />
            <div className="socialMedia">
                <img src={faceBook} alt="facebook" />
                <img src={youtube} alt="youtube" />
                <img src={twitter} alt="twitter" />
                <img src={pinterest} alt="pinterest" />
                <img src={instagram} alt="instagram"/>
            </div>

            <div className="footerContent">
            <p>About Us</p>
            <p>Contact</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>Support</p>
            <p>Privacy Policy</p>
            </div>
                <br/>
            <button></button>
            <br />
            <p>EasyBank.All Rights Reserved</p>
        </footer>
    )
}

export default Footer