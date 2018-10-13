import React from 'react';
import './Element.css';

class Element extends React.Component {

  constructor( props ) {
    super( props );

    this.state = {
      symbol: props.symbol,
      atomic: props.atomic,
      gridPosition: props.gridPosition,
      style: {
          gridColumn: props.gridPosition,
          gridColumnEnd: props.gridPosition,
          borderColor: "white"
      },
      isSelected: false
    }

    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
  }

  handleOnMouseEnter(){
    this.setState((prevState, props) => {
      return {
              isSelected: true,
              style: {
                  gridColumn: prevState.gridPosition,
                  gridColumnEnd: prevState.gridPosition,
                  borderColor: "red"
              }
             };
    });
  }

  handleOnMouseLeave(){
    this.setState((prevState, props) => {
      return {
              isSelected: true,
              style: {
                  gridColumn: prevState.gridPosition,
                  gridColumnEnd: prevState.gridPosition,
                  borderColor: "white"
              }
             };
    });
  }

  render(){
    return (
      <div className="Element"
            style={this.state.style}
            onMouseEnter={this.handleOnMouseEnter}
            onMouseLeave={this.handleOnMouseLeave}>
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
