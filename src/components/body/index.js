import React from 'react';
import './style.css';
import CardItem from './CardItem.js';
import Footer from '../footer/Footer.js';
import {root, imgs} from '../../config.js';

function Cards() {
  return (
    <div className='cards'>
      {/* <h1>Chart: States</h1> */}
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={root + imgs.nsw}
              text='New South Wales'
              path='/echarts'
            />
            <CardItem
              src={root + imgs.vic}
              text='Victoria'
              path='/echarts'
            />
            <CardItem
              src={root + imgs.sa}
              text='South Australia'
              path='/echarts'
            />
            <CardItem
              src={root + imgs.qld}
              text='Queensland'
              path='/echarts'
            />
            <CardItem
            src={root + imgs.tas}
            text='Tasmania'
            path='/echarts'
            />
          </ul>
        </div>
      </div>
      <Footer />
    </div>
    
  );
}

export default Cards;