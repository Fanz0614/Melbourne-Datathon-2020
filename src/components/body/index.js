import React from 'react';
import './style.css';
import CardItem from './CardItem.js';
import Footer from '../footer/Footer.js';

function Cards() {
  return (
    <div className='cards'>
      <h1>XXXXXXXXXXX</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='xxxxxx'
              label='xxx'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='xxxxxxxxxx'
              label='xxx'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='xxxxxxxxxxxxxxxxxxxxxxxxxxx'
              label='xxx'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='xxxxxxxxxxxxxxxxxxxxxxxxxxxx'
              label='xxx'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='xxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
              label='xxx'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
      <Footer />
    </div>
    
  );
}

export default Cards;