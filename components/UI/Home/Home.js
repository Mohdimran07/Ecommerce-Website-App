import React from "react";
import './Home.css';

const Home = ({prodItems}) => {
    return (
        <div>
        <div className="container">
            <div className="header">
            <h2>The Generics</h2>
            </div>
            <div className="album">
                <button className="latest-album">Get our Latest Album</button>
            </div>
            <div className="play">
                <button className="ply-btn">‣</button>
            </div>
           
        </div>
        <section>
            <div className="container-tour">
                <h2 className="tour">Tours</h2>
            </div>
            <div className="tour-box">
                {prodItems.map((items) => (
                    <div className="tour-items">
                        <span className="tour-date">
                        {items.date}
                        </span>
                        <span className="tour-place">
                            {items.place}
                        </span>
                        <span className="tour-spec">
                            {items.spec}
                        </span>
                        <button className="buy-btn">Buy Tickets</button>
                    </div>
                ))}
            </div>
            
        </section>
        </div>
    )
}

export default Home;