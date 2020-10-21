import React from 'react';
import './style.css';
import {vids} from '../../config.js';
import Youtube from 'react-youtube-embed'

function Video(){
    return(
        <div className='outter-container'>
            <h1> Video Presentation </h1>
            <div className='video-container'>
                <Youtube id={vids.youtube_id} />
            </div>
        </div>
    )
}

export default Video;