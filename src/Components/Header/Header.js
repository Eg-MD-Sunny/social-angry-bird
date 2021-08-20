import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="logo-area">
                <img src="https://i.ibb.co/0F22DJC/Logo.png" alt="/"></img>
            </div>
            <div className="text-area">
                <p><span className="first">Social</span><br></br><span className="second">Angry</span><br></br><span className="third">Bird</span></p>
            </div>

            <div className="login-area">
                <a href="_blank"> Signup</a>
                <a href="_blank"> Login</a>
            </div>
        </div>
    );
};

export default Header;