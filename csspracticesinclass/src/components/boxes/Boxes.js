import React,{useState} from 'react';
import "./Boxes.scss"

const Boxes = () => {

    const arrayOfBoxes = [1, 2, 3, 4, 5];

    const [selectBox, setSelectBox] = useState(null);

    const handleClick = (e) => {
        setSelectBox(e.target.id)
    }

  return (
    <div className='boxes'>
        {arrayOfBoxes.map((number) => {
            return <div
            id={number}
            key={number}
            onClick={handleClick}
            className={selectBox === number ? "box box-active" : "box"}>
                {number}
            </div>
        })}
    </div>
  )
}

export default Boxes;