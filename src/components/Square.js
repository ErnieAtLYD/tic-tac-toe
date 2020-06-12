import React from "react";

const Square = ({ handleClick, marker }) => {
  return (
    <div onClick={handleClick} className="square">
      {marker}
    </div>
  );
};

export default Square;
