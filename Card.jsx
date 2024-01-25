import React from "react";

import "./Card.css"

const Card = () =>{
    return ( 
        <> 
        <div> 
        <div className="card "> 
        
    <div className="card-container1 "> 
        <img src="https://picsum.photos/seed/picsum/300/200" alt="Card Image" className="card-img" />
        <h1 className="card-title">Card Title</h1>
        <p className="card-description">This is the card description the Africa.</p>
        <a href="international" className="card-btn" >Learn More </a>
    </div>

    <div className="card-container2 "> 
        <img src="https://picsum.photos/300/200" alt="Card Image" className="card-img" />
        <h1 className="card-title">Card Title</h1>
        <p className="card-description">This is the card description the Africa.</p>
        <a href="international" className="card-btn" >Learn More </a>
    </div>

    <div className="card-container3"> 
        <img src="https://picsum.photos/seed/picsum/300/200" alt="Card Image" className="card-img" />
        <h1 className="card-title">Card Title</h1>
        <p className="card-description">This is the card description the Africa.</p>
        <a href="international" className="card-btn" >Learn More </a>
    </div>

    </div>
    </div>
    </>
    )
}
export default Card;



















