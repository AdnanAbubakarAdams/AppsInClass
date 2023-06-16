import React from "react";
import "./VerticalBackground.scss";
import "./customListStyle.css";

const verticalBackground = () => {
  return (
    <div className="verticalContainer">
      <div className="verticalContainer__background">MostPopular</div>
      <ol className="custom-ol">
        <li className="verticalContainer__para">
          Everyone deserves a Pinecil
        </li>

        <li className="verticalContainer__para">
          An FAA computer glitch
          grounded flights across the US
        </li>

        <li className="verticalContainer__para">
          Parler's parent company has
          laid off a majority of its staff
        </li>

        <li className="verticalContainer__para">
          Marvel Snap's bundle
          pricing is out of control
        </li>

        <li className="verticalContainer__para">
          Microsoft 365 Basic is a
          new $1.99 a month subscription with 100GB of storage and more
        </li>
      </ol>
    </div>
  );
};

export default verticalBackground;
