import React from 'react';
import './style.css';
import CardItem from './CardItem.js';
import Footer from '../footer/Footer.js';
import {root, imgs} from '../../config.js';

function Cards() {
  return (
    <div className='cards'>
      <h1>XXXXXXXXXXX</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={root + imgs.img1}
              text='xxxxxx'
              label='xxx'
              path='/services'
            />
            <CardItem
              src={root + imgs.img2}
              text='xxxxxxxxxx'
              label='xxx'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={root + imgs.img3}
              text='xxxxxxxxxxxxxxxxxxxxxxxxxxx'
              label='xxx'
              path='/services'
            />
            <CardItem
              src={root + imgs.img4}
              text='xxxxxxxxxxxxxxxxxxxxxxxxxxxx'
              label='xxx'
              path='/products'
            />
            <CardItem
              src={root + imgs.img8}
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