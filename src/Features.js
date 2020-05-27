import React from 'react'
import './Features.css'
import onlineIcon from './images/icon-online.svg'
import budgetingIcon from './images/icon-budgeting.svg'
import onboardingIcon from './images/icon-onboarding.svg'
import apiIcon from './images/icon-api.svg'

function Features () {
    return (
     
            <section className="features-background">
                <h2>Why choose Easybank?</h2>
                <h3>We leverage Open Banking to turn your bank account into your financial hub. Control
  your finances like never before.</h3>
                
                <div className="features-container">
                <img src={onlineIcon} alt="icon" />
                    <h2>Online Banking</h2>
                    <h3>Our modern web and mobile applications allow you to keep track of your finances
  wherever you are in the world.</h3>

                <img src={budgetingIcon} alt="icon" />
                    <h2>Simple Budgeting</h2>
                    <h3> See exactly where your money goes each month. Receive notifications when you’re
  close to hitting your limits.</h3>

                <img src={onboardingIcon} alt="icon" />
                    <h2>Fast Onboarding</h2>
                    <h3>We don’t do branches. Open your account in minutes online and start taking control
  of your finances right away.</h3>

                <img src={apiIcon} alt="icon" />
                    <h2> Open API</h2>
                    <h3>Manage your savings, investments, pension, and much more from one account. Tracking
                    your money has never been easier.
</h3>

       </div>
        </section>
    )
}

export default Features