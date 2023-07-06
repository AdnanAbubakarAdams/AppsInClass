import React from 'react';
import "./Carrom.scss"

const Carrom = () => {

    let arrayOfDivs = [1,2,3,4];
  return (
    <div className='carrom'>
    
    {arrayOfDivs.map((number) => {
            return <div
            id={number}
            key={number}
            >
                {number}
            </div>
        })}
    </div>
  )
}

export default Carrom;