import React from 'react';
import { Link} from 'react-router-dom';

function Card(props) {
  return (
    <>
      <div className='cards__item'>
        <Link className='Cards__item__link' to={props.path}>
          <i  class="far fa-chart-bar fa-3x" />
          <div className='cards__item__info'>
            <h4 className='cards__item__text'>{props.text}</h4>
          </div>
          <p className='content'>ssss</p>
        </Link>
      </div>
      
    </>
  );
}

export default Card;