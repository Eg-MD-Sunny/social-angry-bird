import React from 'react';
import './Welcome.css';

const Welcome = () => {
    return (
        <div className="welcome-area">
            <img src="https://i.ibb.co/WKfMGsg/BG-PIC.jpg" alt="BG PIC"></img>
            <div className="text-area-01">
                <h1>WELCOME TO OUR SITE</h1>
                <h3 style={{color:'goldenrod', fontSize:'25px', lineHeight:'0px'}}>SOCIAL ANGRY BIRD</h3>
                
            </div>
            <div className="position" style={{marginTop:"10px"}}>
                    <a href="_blank">Our Member</a>
            </div>
        </div>
        
    );
};

export default Welcome;