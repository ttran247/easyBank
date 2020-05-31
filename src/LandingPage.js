import React from "react"
import './LandingPage.css'
import mockups from './images/image-mockups.png'
import deskTopBg from './images/bg-intro-desktop.svg'

function LandingPage(props) {
    return (
        <>

            <hero>
                <div className="landingImg">
                    <img src={mockups} alt='mockups' />
                </div>
                <div className="mobileContainer">
                    <h1 className="heading">Next Generation</h1>
                    <h1 className="heading">digital banking</h1>
                    <h3 className="heading-info">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and muchmore.</h3>
                    <button>Request Invite</button>
                </div>

        
            </hero>




            <hero className="desktopHero">
        <div className="desktopContainer">
            <h1 className="heading">Next Generation</h1>
            <h1 className="heading">digital banking</h1>
                    <h3 className="heading-info">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and muchmore.</h3>
            <button>Request Invite</button>
        </div>

        <div className="landingImgDesktop">
            <img src={mockups} alt='mockups'/>
        </div>
            </hero>
            </>
    )
}

export default LandingPage