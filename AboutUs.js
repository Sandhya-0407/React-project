import { useState } from "react";
import './AboutUs.css'
function About() {

return (
<>
<div className="about-page" >
                <h1 style={{ fontStyle: 'italic', fontSize: 'bold', textAlign: 'center',color:'purple'}}> About Us</h1>

            
                    <div  className='about-col'> 
                    <h3 style={{ marginTop: 40, textAlign: 'left', marginLeft: 65 }}> Customer Support :</h3>

                    <p style={{ textAlign: 'left', marginLeft: 65 }}> Our Customer Support Team is committed to providing you with extensive knowledge about our tours and procedures. We are here to guide you every step of the way, ensuring your travel experience with Make Your Trip is seamless and memorable. Contact us now to have all of your travel-related questions answered!</p>
                </div>
                
                <div className='about-col'> 
                <div style={{textAlign:"left",marginLeft:65}}>
                    <h2>Innovations are what Make Your Trip loves Creating!!!</h2>
                </div>
                            <div style={{textAlign:"left",marginLeft:65}}>
                            <p>Make Your Trip provides more than 50 group tour products for Europe, almost 50 products for South East Asia, exclusive special tours for ladies, students, senior citizens, and trips to exotic destinations for newlyweds. Besides, we follow a continuous research for new products, themes and a range of travel upgradations that helps us serve the best to our guests.

                            Whether it's a corporate tour, romantic delight, adventurous junkies or just a Chota Break, we have ample of tour choices to suit the most of your taste, requirement and budget. So Hurry up and book a Holiday with Kesari!
                            Yours Sincerely </p>
                            </div>
                            </div>
                            

<div className="aboutus" >
    <div className="card1" >
    <h2>40+</h2>
    <h5>Experinence </h5> 
</div>

    <div className="card2">
        <h2>50,000+ </h2>
        <h5>Adventures</h5>
        </div>

        <div className="card3">
        <h2>300+ </h2>
        <h5>tour leaders</h5>
        </div>

        <div className="card4" >
        <h2>160+ </h2>
        <h5>Countries</h5>
        </div>

</div>

            </div>

</>
)

}
export default About;











