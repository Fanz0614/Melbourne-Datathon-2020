import React from 'react';
import './style.css';
import Card from './CardItem.js';


function VICcards() {
  return (
    <div className='Cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <Card
              text='Visualization'
              path='/VIC-echarts'
            />
            <Card
             
              text='XXXXXXXXX'
              path=''
            />
            <Card
              
              text='XXXXXXXXX'
              path=''
            />
            
            
            
          </ul>
          
        </div>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <Card
              
              text='XXXXXXXXX'
              path=''
            />
            <Card
              
              text='XXXXXXXXX'
              path=''
            />
           
            
            
          </ul>
          
        </div>
      </div>
      
     
    </div>
    
  );
}

export default VICcards;