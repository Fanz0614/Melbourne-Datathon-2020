import React from 'react';
import './style.css';
import {Graph,Pic} from './style.js';
class Report extends React.Component{
    render(){
        return(
            <div>
                <div className='article-container-1'>
                    <h1 className='h1'>Learning from Electricity Demand Data During A Pandemic - Part B</h1>
                    <div className='tag'>Oct 7, 2020  |  X min read</div>
                </div>
                <div className='article-container'>
                    <div className='body'>
                        <Graph>
                        Using the daily Victorian electricity demand as an example, this blog will outline procedures to develop a forecasting model. To enable scheduling of energy supply for the next day I develop one day ahead forecasts. In my next post I will use this model to outline procedures to improve forecasting capability during uncertain times.
                        </Graph>
                        <Graph>sss</Graph>
                        
                        <Pic src='./images/img-1.jpg' />

                        <Graph>
                        Using the daily Victorian electricity demand as an example, this blog will outline procedures to develop a forecasting model. To enable scheduling of energy supply for the next day I develop one day ahead forecasts. In my next post I will use this model to outline procedures to improve forecasting capability during uncertain times.
                        </Graph>
                       
                    </div>
                </div>
                
                
            </div>
            
        )
    }
}
export default Report;