import React from 'react'  

function Header() {

    return (
        <div>
            <header className="header">
                <marquee>Welcome to rateMyTutor</marquee>
                <a href="/" style={{display: 'inline-block', width: '300px', float: 'left', marginLeft: '20px'}}><h1 style={{color: 'white'}} className="logo">RateMyTutor</h1></a>
                {window.location.pathname === '/' ? 
                <div className="navbar">
                    <button className="navButton">Login</button>
                    
                    <button className="navButton">Sign Up</button>
                </div>
                : null}
            </header>
        </div>
    )
}

export default Header