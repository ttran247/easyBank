import React from "react"
import './Article.css'
import confetti from './images/image-confetti.jpg'
import currency from './images/image-currency.jpg'
import plane from './/images/image-plane.jpg'
import restaurant from './images/image-restaurant.jpg'

function Article() {
    return (

        <section className="article">

            <h2>Latest Articles</h2>
            <br />


            <div className="card-container">
                <div className="card">
                    <div className="imgCard">
                        <img src={currency} alt="articlePicture" />
                    </div>
                    <div className="article-info">
                        <p>  By Claire Robinson
</p>
                        <h4>Receive money in any currency with no fees</h4>
                        <p>The world is getting smaller and we’re becoming more mobile. So why should you be
                        forced to only receive money in a single … </p>
                    </div>
                </div>

                <div className="card">
                    <div className="imgCard">
                        <img src={restaurant} alt="articlePicture" />
                    </div>
                    <div className="article-info">
                        <p>By Wilson Hutton</p>
                        <h4>Treat yourself without worrying about money</h4>
                        <p>Our simple budgeting feature allows you to separate out your spending and set 
  realistic limits each month. That means you …</p>
                    </div>
                </div>

                <div className="card">
                    <div className="imgCard">
                        <img src={plane} alt="articlePicture" />
                    </div>
                    <div className="article-info">
                        <p>  By Wilson Hutton</p>
                        <h4> Take your Easybank card wherever you go</h4>
                        <p> We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
  while you’re abroad. We’ll even show you … </p>
                    </div>
                </div>

                <div classname="card">
                    <div className="imgCard">
                        <img src={confetti} alt="articlePicture" />
                    </div>
                    <div className="article-info">
                        <p>  By Claire Robinson</p>
                        <h4> Our invite-only Beta accounts are now live!</h4>
                        <p>After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
  It’s easy to request an invite through the site ... </p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Article 