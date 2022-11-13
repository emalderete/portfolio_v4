import React, { useState } from 'react';
import programmingImage from '../Img/programming.svg';
import { projects } from './Data/Projects';

const Navigation = () => {
    // Conjunto de estados que controlan el comportamiento de las ventanas modal.
    const [showWorks, setShowWorks] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const [showSkills, setShowSkills] = useState(false);
    const [showContact, setShowContact] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    // Conjunto de funciones que controlan los estados y el comportamiento de las diferentes ventanas modal.
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
    };

    function showMobileMenuHandler() {
        showMobileMenu ? setShowMobileMenu(false) : setShowMobileMenu(true);
    };

    function mobileNavigationAuxiliar(handler) {
        handler();
        showMobileMenuHandler();
    };

    return (
        <div>
            {/* ----------- Botones de navegación de escritorio --------- */}
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
            {/* ----------- Botón de navegación móvil --------- */}
            <div className={showMobileMenu ? 'navMobile hideMobileButton' : 'navMobile'}>
                <div className='mobileButton' onClick={showMobileMenuHandler}>
                    <span><i className='fa-solid fa-bars'></i></span>
                </div>
            </div>
            {/* ----------- ventanas modal --------- */}
            <div className={showWorks ? 'modal showModal' : 'modal'} id='modalWorks'>
                <div type='button' className='closeModalButton' onClick={showWorksHandler}>
                    <span><i className='fa-solid fa-chevron-right'></i></span>
                </div>
                <div className='modalBody'>
                    <h1 className='modalTitle' id='modalTitleWorks'>Works</h1>
                    <div className='modalWorksIntro'>
                        <div className='modalWorksIntroTexts'>
                            <h2 className='titles'>My creations</h2>
                            <p className='texts'>Works developed by me or which I've participated in it's development.</p>
                        </div>
                        <div className='modalWorksIntroImg'>
                            <img src={programmingImage} alt=''></img>
                        </div>
                    </div>
                    <div className='projects'>
                        { projects.map((project, index)=>{
                        return(
                            <div className='projectCard' key={index}>
                                <div className='projectCardOverlay'>
                                    <div className='projectCardOverlayContent'>
                                        <a href={project.linkPage} rel='noopener noreferer' target='blank'>
                                            <h5 className='projectName'>{project.name}</h5>
                                            <i className='fa-solid fa-arrow-up-right-from-square'></i>
                                        </a>
                                    </div>
                                </div>
                                <img src={project.image} alt=''/>
                            </div>
                        )})}
                    </div>
                </div>
            </div>
            <div className={showAbout ? 'modal showModal' : 'modal'} id='modalAbout'>
                <div type='button' className='closeModalButton' onClick={showAboutHandler}>
                    <span><i className='fa-solid fa-chevron-right'></i></span>
                </div>
                <div className='modalBody'>
                    <h1 className='modalTitle' id='modalTitleAbout'>About me</h1>
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
            {/* ----------- menu móvil --------- */}
            <div className={showMobileMenu ? 'mobileModal showMobileModal' : 'mobileModal'}>
                <div className='mobileModalButtons'>
                    <div onClick={()=>{mobileNavigationAuxiliar(showWorksHandler)}}>
                        <span>Works</span>
                    </div>
                    <div onClick={()=>{mobileNavigationAuxiliar(showAboutHandler)}}>
                        <span>Who I'm?</span>
                    </div>
                    <div onClick={()=>{mobileNavigationAuxiliar(showSkillsHandler)}}>
                        <span>My skills</span>
                    </div>
                    <div onClick={()=>{mobileNavigationAuxiliar(showContactHandler)}}>
                        <span>Contact me</span>
                    </div>
                </div>
            {/* ----------- Botón de cierre del menu móvil --------- */}
                <div className='mobileModalCloseButton' onClick={showMobileMenuHandler}>
                    <span><i className='fa-solid fa-chevron-down'></i></span>
                </div>
            </div>
        </div>
    );
};

export default Navigation;