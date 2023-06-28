import React from 'react';
import { Link } from 'react-router-dom';

const HomeRender = ({ component, src }) => {
  return (
    <div className='homeRender'>
        <Link to={`/${component.id}`}>
            <img src={src} alt=""/>
        </Link>
    </div>
  )
}

export default HomeRender;