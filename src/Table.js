import React from 'react';
import Element from './Element.js';
import './Table.css';

const MAX_LENGTH = 18;

class Table extends React.Component {

  constructor( props ) {
    super( props );

    this.state = {
      hoveredElement: "",
      selectedElements: []
    }

    this.handleHoveredElement = this.handleHoveredElement.bind(this);
    this.handleSelectedElement = this.handleSelectedElement.bind(this);
  }

   rowLeftElements(data, handler){
    var elements = [];
    for(var i = 0; i < data.length; i++) {
        elements.push(
          <Element
            key={i}
            symbol={data[i].symbol}
            atomic={data[i].atomic}
            gridPosition={i+1}
            hoverHandler={this.handleHoveredElement}
            clickHandler={this.handleSelectedElement}
          />
        );
    }

    return (
      <>
      {elements}
      </>
    );
  }

   rowRightElements(data, handler){
    var elements = [];
    for(var i = 0; i < data.length; i++) {
        elements.push(
          <Element
            key={MAX_LENGTH-i}
            symbol={data[i].symbol}
            atomic={data[i].atomic}
            gridPosition={MAX_LENGTH-data.length+i+1}
            hoverHandler={this.handleHoveredElement}
            clickHandler={this.handleSelectedElement}
          />
        );
    }

    return (
      <>
      {elements}
      </>
    );
  }

  handleHoveredElement(element){
    this.setState({hoveredElement: element});
  }

  handleSelectedElement(element){
    this.setState((prevState, props) => {

      var elements = prevState.selectedElements;
      if(element){
        if(!element.isSelected){
          elements.push(element.symbol);
        }
        else{
          elements = elements.filter(function(value, index, arr){
              return value !== element.symbol;
          });
        }
      }

      return { selectedElements: elements };
    });
  }

  render(){
    var details = "";
    if(this.state.hoveredElement){
      details = this.state.hoveredElement.symbol;
    }

    var selectedElements = "";
    for(var i = 0; i < this.state.selectedElements.length; i++) {
      selectedElements += this.state.selectedElements[i] + ", ";
    }

    return (
      <div>
        <div className="Table">
          {this.rowLeftElements([{symbol: "H", atomic: 1}])}
          {this.rowRightElements([{symbol: "He", atomic: 2}])}

          {this.rowLeftElements([{symbol: "Li", atomic: 3},
                                 {symbol: "Be", atomic: 4}])}
          {this.rowRightElements([{symbol: "B", atomic: 5},
                                  {symbol: "C", atomic: 6},
                                  {symbol: "N", atomic: 7},
                                  {symbol: "O", atomic: 8},
                                  {symbol: "F", atomic: 9},
                                  {symbol: "Ne", atomic: 10}])}

          {this.rowLeftElements([{symbol: "Na", atomic: 11},
                                 {symbol: "Mg", atomic: 12}])}
          {this.rowRightElements([{symbol: "Al", atomic: 13},
                                  {symbol: "Si", atomic: 14},
                                  {symbol: "P", atomic: 15},
                                  {symbol: "S", atomic: 16},
                                  {symbol: "Cl", atomic: 17},
                                  {symbol: "Ar", atomic: 18}])}

          {this.rowLeftElements([{symbol: "K", atomic: 19},
                                 {symbol: "Ca", atomic: 20},
                                 {symbol: "Sc", atomic: 21},
                                 {symbol: "Ti", atomic: 22},
                                 {symbol: "V", atomic: 23},
                                 {symbol: "Cr", atomic: 24},
                                 {symbol: "Mn", atomic: 25},
                                 {symbol: "Fe", atomic: 26},
                                 {symbol: "Co", atomic: 27},
                                 {symbol: "Ni", atomic: 28},
                                 {symbol: "Cu", atomic: 29},
                                 {symbol: "Zn", atomic: 30},
                                 {symbol: "Ga", atomic: 31},
                                 {symbol: "Ge", atomic: 32},
                                 {symbol: "As", atomic: 33},
                                 {symbol: "Se", atomic: 34},
                                 {symbol: "Br", atomic: 35},
                                 {symbol: "Kr", atomic: 36}])}

         {this.rowLeftElements([{symbol: "Rb", atomic: 37},
                                {symbol: "Sr", atomic: 38},
                                {symbol: "Y", atomic: 39},
                                {symbol: "Zr", atomic: 40},
                                {symbol: "Nb", atomic: 41},
                                {symbol: "Mo", atomic: 42},
                                {symbol: "Tc", atomic: 43},
                                {symbol: "Ru", atomic: 44},
                                {symbol: "Rh", atomic: 45},
                                {symbol: "Pd", atomic: 46},
                                {symbol: "Ag", atomic: 47},
                                {symbol: "Cd", atomic: 48},
                                {symbol: "In", atomic: 49},
                                {symbol: "Sn", atomic: 50},
                                {symbol: "Sb", atomic: 51},
                                {symbol: "Te", atomic: 52},
                                {symbol: "I", atomic: 53},
                                {symbol: "Xe", atomic: 54}])}
        </div>
        <h3>
          {details}
        </h3>
        <div className="Table-footer">
          <b>Selected elements:</b> {selectedElements}
        </div>
      </div>
    );
  }
}

export default Table;
