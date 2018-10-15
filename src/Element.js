import React from 'react';
import './Element.css';

class Element extends React.Component {

  constructor( props ) {
    super( props );

    this.state = {
      symbol: props.symbol,
      atomic: props.atomic,
      gridPosition: props.gridPosition,
      isSelected: false,
      isHovered: false,
      parentClickHandler: props.clickHandler,
      parentHoverHandler: props.hoverHandler
    }

    this.handleOnClick      = this.handleOnClick.bind(this);
    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
  }

  handleOnClick(){
    this.setState((prevState, props) => {

      // call parent hover handler to pass
      // element details upwards
      if(prevState.parentClickHandler){
        prevState.parentClickHandler(prevState);
      }

      return { isSelected: !prevState.isSelected };
    });
  }

  handleOnMouseEnter(){

    this.setState((prevState, props) => {

      // call parent hover handler to pass
      // element details upwards
      if(prevState.parentHoverHandler){
        prevState.parentHoverHandler(prevState);
      }

      return { isHovered: true };
    });
  }

  handleOnMouseLeave(){
    this.setState((prevState, props) => {

      // call parent hover handler to pass
      // null element upwards
      if(prevState.parentHoverHandler){
        prevState.parentHoverHandler(null);
      }

      return { isHovered: false };
    });
  }

  render(){
    var colour = "white";
    if(this.state.isHovered){
      colour = "red";
    }
    if(this.state.isSelected){
      colour = "blue";
    }

    const style = {
        gridColumn: this.state.gridPosition,
        gridColumnEnd: this.state.gridPosition,
        borderColor: colour
    };

    return (
      <div className="Element"
            style={style}
            onMouseEnter={this.handleOnMouseEnter}
            onMouseLeave={this.handleOnMouseLeave}
            onClick={this.handleOnClick}>
        <div className="Element-atomic">
          {this.state.atomic}
        </div>
        <div className="Element-symbol">
          {this.state.symbol}
        </div>
      </div>
    );
  }
}

export default Element;
