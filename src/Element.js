import React from 'react';
import './Element.css';

function Element(props) {
  return (
    <div className="Element" style={props.style}>
      <div className="Element-atomic">
        {props.atomic}
      </div>
      <div className="Element-symbol">
        {props.symbol}
      </div>
    </div>
  );
}

export default Element;
