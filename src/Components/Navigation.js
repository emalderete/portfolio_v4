import React, { useState } from 'react';

const Navigation = () => {
    const [showWorks, setShowWorks] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const [showSkills, setShowSkills] = useState(false);
    const [showContact, setShowContact] = useState(false);

    function showWorksHandler(){
        showWorks ? setShowWorks(false) : setShowWorks(true);
    };

    function showAboutHandler(){
        showAbout ? setShowAbout(false) : setShowAbout(true);
    };

    function showSkillsHandler() {
        showSkills ? setShowSkills(false) : setShowSkills(true);
    };

    function showContactHandler(){
        showContact ? setShowContact(false) : setShowContact(true);
    }

    return (
        <div>
            <div className='nav' onLoad={()=>{window.scrollY(0)}}>
                <div className='navButton' id='workButton' onClick={showWorksHandler}>
                    <span className='navButtonChild'><i className='fa-solid fa-briefcase'></i></span>
                    <span className='navText'>Works</span>
                </div>
                <div className='navButton' id='aboutButton' onClick={showAboutHandler}>
                    <span className='navButtonChild'><i className='fa-solid fa-address-card'></i></span>
                    <span className='navText'>Who I'm?</span>
                </div>
                <div className='navButton' id='skillButton' onClick={showSkillsHandler}>
                    <span className='navButtonChild'><i className='fa-solid fa-gears'></i></span>
                    <span className='navText'>Skills</span>
                </div>
                <div className='navButton' id='contactButton' onClick={showContactHandler}>
                    <span className='navButtonChild'><i className='fa-solid fa-envelope'></i></span>
                    <span className='navText'>Contact</span>
                </div>
            </div>
            <div className='navMobile'>
                <div className='mobileButton'>
                    <span><i className='fa-solid fa-bars'></i></span>
                </div>
            </div>
            <div className={showWorks ? 'modal showModal' : 'modal'} id='modalWorks'>
                <div type='button' className='closeModalButton' onClick={showWorksHandler}>
                    <span><i className='fa-solid fa-chevron-right'></i></span>
                </div>
                <div className='modalBody'>
                    <h1 className='modalTitle' id='modalTitleWorks'>Works</h1>
                </div>
            </div>
            <div className={showAbout ? 'modal showModal' : 'modal'} id='modalAbout'>
                <div type='button' className='closeModalButton' onClick={showAboutHandler}>
                    <span><i className='fa-solid fa-chevron-right'></i></span>
                </div>
                <div className='modalBody'>
                    <h1 className='modalTitle' id='modalTitleAbout'>About</h1>
                </div>
            </div>
            <div className={showSkills ? 'modal showModal' : 'modal'} id='modalSkills'>
                <div type='button' className='closeModalButton' onClick={showSkillsHandler}>
                    <span><i className='fa-solid fa-chevron-right'></i></span>
                </div>
                <div className='modalBody'>
                    <h1 className='modalTitle' id='modalTitleSkills'>Skills</h1>
                </div>
            </div>
            <div className={showContact ? 'modal showModal' : 'modal'} id='modalContact'>
                <div type='button' className='closeModalButton' onClick={showContactHandler}>
                    <span><i className='fa-solid fa-chevron-right'></i></span>
                </div>
                <div className='modalBody'>
                    <h1 className='modalTitle' id='modalTitleContact'>Contact</h1>
                </div>
            </div>
        </div>
    );
};

export default Navigation;