import React from 'react';
import { Button } from '../button/index.js';
import './style.css';
import {root, vids} from '../../config.js';


function HeroSection(){
    const Video=()=>window.open('about:blank').location.href='http://www.Youtube.com';
    const Click=()=>window.location.href='home';
        

    
    return(
        <div className='hero-container'>
            <video src={root + vids.video2} autoPlay loop muted />
            <h1>ssss</h1>
            <p>ssssss</p>
            <div className='hero-btns'>
                <Button className='btns' 
                        buttonStyle='btn--outline' 
                        buttonSize='btn--large'
                        onClick={Click}>
                    GET STARTED
                </Button>
                
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={Video}
                    
                    >
                    WATCH VIDEO <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;