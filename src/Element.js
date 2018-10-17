import React from 'react';
import './Element.css';

function GridColourElement(props){

  const style = {
      gridColumn: props.gridPosition,
      gridColumnEnd: props.gridPosition,
      borderColor: props.colour
  };

  return(
    <div className="Element"
          style={style}
          onMouseEnter={(element) => props.handleOnMouseEnter(props.element)}
          onMouseLeave={(element) => props.handleOnMouseLeave(props.element)}
          onClick={(element) => props.handleOnClick(props.element)}>
      <div className="Element-atomic">
        {props.element.atomic}
      </div>
      <div className="Element-symbol">
        {props.element.symbol}
      </div>
    </div>
  );
}

export { GridColourElement };
