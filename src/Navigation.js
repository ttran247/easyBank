import React from "react"
import './Navigation.css'
import logo from './images/logo.svg'
import hamburger from './images/icon-hamburger.svg'

class Navigation extends React.Component {
    render() {
        return (
            <>
                
                <nav class="mobile-menu">
                    <div className="logo" className="nav-col">
                        <img src={logo} alt="mobileLogo" />
                </div>
                    <div className="hamburgerMenu" className="nav-col">
                        <img src={hamburger} alt="menu"/>
                
                    <div className="navFlexBox">
                        <ul class="navBarLinks">
                            <li className="navLink">Home</li>
                            <li className="navLink">About</li>
                            <li className="navLink">Contact</li>
                            <li className="navLink">Blogs</li>
                            <li className="navLink">Career</li>
                        </ul>
                    </div>
                    <button>Request Invite</button>
                        </div>

                </nav>

                <nav class="desktop-menu">

                    <div classname="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="navFlexBox">
                        <ul class="navBarLinks">
                            <li className="navLink">Home</li>
                            <li className="navLink">About</li>
                            <li className="navLink">Contact</li>
                            <li className="navLink">Blog</li>
                            <li className="navLink">Careers</li>
                        </ul>
                    </div>

                    <button>Request Invite</button>

                </nav>
            </>

        )
    }
}
export default Navigation 
