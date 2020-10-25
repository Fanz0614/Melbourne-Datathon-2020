import React from 'react';
import './style.css';
import Card from './CardItem.js';



function NSWcards() {
  return (
    <div className='Cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <Card
              text='Visualization'
              path='/NSW-echarts'
            />
            <Card
             
              text='Visualization'
              path='/NSW-echarts'
            />
            <Card
              
              text='Visualization'
              path='/NSW-echarts'
            />
            
            
            
          </ul>
          
        </div>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <Card
              
              text='Visualization'
              path='/NSW-echarts'
            />
            <Card
              
              text='Visualization'
              path='/NSW-echarts'
            />
           
            
            
          </ul>
          
        </div>
      </div>
      
     
    </div>
    
  );
}

export default NSWcards;