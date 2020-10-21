import React from 'react';
import { Button } from '../button/index.js';
import './style.css';
import {root, vids} from '../../config.js';

function HeroSection(){
    const Video=()=>window.location.href='video';
    const Click=()=>window.location.href='charts';
        
    
    return(
        <div className='hero-container'>
            <video src={root + vids.video} autoPlay loop muted />
            <h1>M-stars</h1>
            <p>Datathon 2020</p>
            <div className='hero-btns'>
                <Button className='btns' 
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'
                        onClick={Click}>
                    <i class="fas fa-chart-line"></i>
                    CHARTS 
                </Button>
                
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={Video}>
                    <i className='far fa-play-circle' />
                    VIDEO 
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;