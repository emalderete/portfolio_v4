import React, { useState } from 'react';
import programmingImage from '../Img/programming.svg';
import aboutImage from '../Img/about.svg';
import studyImage from '../Img/study.svg';
import toOffer from '../Img/toOffer.svg';
import highlight from '../Img/highlight.svg';
import deal from '../Img/deal.svg';
import reactLogo from '../Img/logo512.png';
import { projects, objectSkills } from './Data/Projects';

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

    function calcPercentage(value) {
        return 730 / 100 * value;
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
                    <div className='workInProgress'>
                        <div className='workInProgressBody'>
                            <div>
                                <h2>Work in progress...</h2>
                                <p>I'm working in a new project right now, an e-commerce site as my institute final exam.</p>
                            </div>
                            <div className='progressImgContainer'>
                                <img className='progressImg' src='https://i.ibb.co/B6XwSLJ/e-commerce.jpg' alt=''></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={showAbout ? 'modal showModal' : 'modal'} id='modalAbout'>
                <div type='button' className='closeModalButton' onClick={showAboutHandler}>
                    <span><i className='fa-solid fa-chevron-right'></i></span>
                </div>
                <div className='modalBody'>
                    <h1 className='modalTitle' id='modalTitleAbout'>About me</h1>
                    <div className='aboutIntro'>
                        <div className='aboutTextContainer'>
                            <h2 className='aboutTitle'>Who I am?</h2>
                            <p className='aboutText'>I am passionate about computers, components, video games and music. In my free time I enjoy a good coffee while I code.
                            <br/>My goals are to continue learning new technologies and developing skills that allow me to expand my horizons more and more.
                             I firmly believe that success is an attainable goal through constant progress and advancement.</p>
                        </div>
                        <img className='aboutImg' id='aboutIntroImg' src={aboutImage} alt='' />
                    </div>
                    <div className='aboutStudies'>
                        <img className='aboutImg' src={studyImage} alt='' />
                        <div className='aboutTextContainer'>
                            <h2 className='aboutTitle'>Where I formed?</h2>
                            <p className='aboutText'>Throughout my life I have studied in different places, some were unfinished careers,
                             I have taken on different assignments but none have aroused my passion as much as programming.<br/>
                             My main training was at Rolling Code School where I learned FullStack development and HTML 5, CSS 3, 
                             JavaScript and React technologies, among other technologies. 
                             At that moment I felt that I discovered a new world that was previously hidden from my eyes, programming is something that everyone should learn at some point in their life.</p>
                        </div>
                    </div>
                    <div className='aboutToOffer'>
                        <div className='aboutTextContainer'>
                            <h2 className='aboutTitle'>What can I offer?</h2>
                            <p className='aboutText'>My motivation for personal and professional development drives me to accept new challenges that allow me to gain new knowledge, 
                            therefore I can offer my talent for the development of innovative solutions that help optimize my clients' growth.
                            Some features I can develop are:</p>
                            <ul id='aboutToOfferList'>
                                <li>Development of forms and their corresponding validations</li>
                                <li>Login and register feature</li>
                                <li>CRUD system (Create, Read, Update, Delete) for services that require the loading, modification and deletion of data</li>
                                <li>Creation and maintenance of databases</li>
                                <li>Integration of additional services or elements embedded in the same website (maps, players, etc.)</li>
                                <li>Custom design and aesthetics (animations, visual effects, etc.)</li>
                                <li>Intuitive user interface design</li>
                            </ul>
                        </div>
                        <img className='aboutImg' src={toOffer} alt='' />
                    </div>
                    <div className='aboutDifference'>
                        <img className='aboutImg' src={highlight} alt='' />
                        <div className='aboutTextContainer'>
                            <h2 className='aboutTitle'>What differentiates me from the others?</h2>
                            <p className='aboutText'>I maintain a persevering and active attitude in problem solving until I obtain a solution or favorable results. 
                            When a situation arises that hinders my progress, I do not rest until I overcome the obstacle and learn from it. 
                            On the other hand, I consider myself a creative person, so I always think about how to improve the aesthetic aspect of my work.</p>
                        </div>
                    </div>
                    <div className='aboutTrust'>
                        <div className='aboutTextContainer'>
                            <h2 className='aboutTitle'>Why trust in me?</h2>
                            <p className='aboutText'>My work includes my own personal guarantee with which I ensure customer satisfaction through a quality product. 
                            If said product does not meet expectations or does not ensure satisfaction, 
                            I comply with my guarantee by reimbursing the total or partial amount paid or making adjustments needed at no additional charge as convenient.</p>
                        </div>
                        <img className='aboutImg' src={deal} alt='' />
                    </div>
                </div>
            </div>
            <div className={showSkills ? 'modal showModal' : 'modal'} id='modalSkills'>
                <div type='button' className='closeModalButton' onClick={showSkillsHandler}>
                    <span><i className='fa-solid fa-chevron-right'></i></span>
                </div>
                <div className='modalBody'>
                    <h1 className='modalTitle' id='modalTitleSkills'>Skills</h1>
                    <div className='skillsContent'>
                        <div className='skillsIntro'>
                            <div className='skillsIntroTextContainer'>
                                <h2 className='skillsTitle'>I specialize in React.js</h2>
                                <p className='skillsText'>This site was developed in React but I know another different technologies</p>
                            </div>
                            <img className='reactLogo' src={reactLogo} alt='' />
                        </div>
                        <h2 style={{backgroundColor : '#474747', textAlign : 'center', paddingTop : '5rem'}} className='skillsTitle'>Here is my skills level</h2>
                        <div className='skillsList'>
                        { objectSkills.map((skill, index)=>{
                            return(
                                <div key={index} className='skillsMeter'>
                                    <div className='skillsMeterOuter'>
                                        <svg className='progressMeter' xmlns='http://www.w3.org/2000/svg' version='1.1' width='300px' height='300px'>
                                            <defs>
                                               <linearGradient id='GradientColor'>
                                                  <stop offset='0%' stopColor='#e91e63' />
                                                  <stop offset='100%' stopColor='#673ab7' />
                                               </linearGradient>
                                            </defs>
                                            <circle style={{strokeDasharray: 2000 + calcPercentage(skill.value)}} className='progressColor' cx='150' cy='150' r='118' strokeLinecap='round' />
                                        </svg>
                                        <div className='skillsMeterInner'>
                                            <div><i className={skill.icon}></i></div>
                                            <div className='skillNameDisplayed'>{skill.name}</div>
                                            <div className='percentageDisplayed'>{skill.value}%</div>
                                        </div>
                                    </div>
                                </div>
                        )})}
                        </div>
                    </div>
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