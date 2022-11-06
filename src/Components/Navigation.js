import React from 'react';

const Navigation = () => {
    return (
        <div className='nav'>
            <button type='button'>
                <div className='navButtonTag'>
                    <span className='navButtonTagText'><i className='fa-solid fa-briefcase'></i><span className='text'> Works</span></span>
                </div>
            </button>
            <button type='button'>
                <div className='navButtonTag'>
                    <span className='navButtonTagText'><i className='fa-solid fa-code'></i><span className='text'> Who I'm</span></span>
                </div>
            </button>
            <button type='button'>
                <div className='navButtonTag'>
                    <span className='navButtonTagText'><i className='fa-solid fa-lightbulb'></i><span className='text'> Skills</span></span>
                </div>
            </button>
            <button type='button'>
                <div className='navButtonTag'>
                    <span className='navButtonTagText'><i className='fa-solid fa-paper-plane'></i><span className='text'> Contact me</span></span>
                </div>
            </button>
        </div>
    );
};

export default Navigation;