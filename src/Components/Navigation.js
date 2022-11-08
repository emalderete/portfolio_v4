import React from 'react';

const Navigation = () => {
    return (
        <div>
            <div className='nav'>
                <div className='navButton' id='workButton'>
                    <span className='navButtonChild'><i className='fa-solid fa-briefcase'></i></span>
                    <span className='navText'>Works</span>
                </div>
                <div className='navButton' id='aboutButton'>
                    <span className='navButtonChild'><i className='fa-solid fa-address-card'></i></span>
                    <span className='navText'>Who I'm?</span>
                </div>
                <div className='navButton' id='skillButton'>
                    <span className='navButtonChild'><i className='fa-solid fa-gears'></i></span>
                    <span className='navText'>Skills</span>
                </div>
                <div className='navButton' id='contactButton'>
                    <span className='navButtonChild'><i className='fa-solid fa-paper-plane'></i></span>
                    <span className='navText'>Contact</span>
                </div>
            </div>
            <div className='modalWorks'>
                <h1>works</h1>
            </div>
        </div>
    );
};

export default Navigation;