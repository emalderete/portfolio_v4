import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';

const Hero = () => {
    const el = useRef(null);
    const typed = useRef(null);

    useEffect(()=>{
        const options = {
            strings: ["<h1 class='nameText'>Hello World!</h1>",
            "<h1 class='nameText'>Hello World! My Name's Emanuel</h1>",
            "<h1 class='nameText'>Hello World! My Name's Emanuel<br/>A <span style='color: #ff8383'>Web Developer!</span></h1>"],
            typeSpeed: 35,
            startDelay: 300,
            backDelay: 400,
            showCursor: false
        };
        typed.current = new Typed(el.current, options);

        return ()=>{
            typed.current.destroy();
        };
    }, []);

    return (
        <div className='heroContainer'>
            <div className='hero'>
                <div className='name'>
                    <span ref={el}></span>
                </div>
            </div>
        </div>
    );
};

export default Hero;