import React from "react";
import "./Square.css";

const square = ({ onClick, value }) => {

    return (
        <button className="square"
            onClick={onClick}>
            {value}
       </button>
   );
}

export default square