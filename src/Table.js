import React from 'react';
import { GridColourElement } from './Element.js';
import './Table.css';

const MAX_LENGTH = 18;

class Table extends React.Component {

  constructor( props ) {
    super( props );

    this.state = {
      hoveredElement: null,
      selectedElements: []
    }
  }

  createElements(data, offset){
   var elements = [];
   for(var i = 0; i < data.length; i++) {
       var colour = "white";
       if(this.state.hoveredElement &&
          this.state.hoveredElement.symbol === data[i].symbol){
         colour = "blue";
       }
       if(this.state.selectedElements.indexOf(data[i].symbol) > -1){
         colour = "red";
       }

       elements.push(
         <GridColourElement
           key={i}
           colour={colour}
           element={data[i]}
           gridPosition={offset+i+1}
           handleOnMouseEnter={(element) => {this.setState({hoveredElement: element})}}
           handleOnMouseLeave={(element) => {this.setState({hoveredElement: null})}}
           handleOnClick={(element) => {
              this.setState((prevState, props) => {
                var elements = prevState.selectedElements;
                if(element){
                  if(elements.indexOf(element.symbol) === -1){
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
           }
         />
       );
   }
   return elements;
  }

   rowLeftElements(data){
    return (
      <>
      {this.createElements(data, 0)}
      </>
    );
  }

   rowRightElements(data){
    return (
      <>
      {this.createElements(data, MAX_LENGTH-data.length)}
      </>
    );
  }

  allElements(){
    return (
      <>
      {this.rowLeftElements([{symbol: "H", atomic: 1, name: "Hydrogen"}])}
      {this.rowRightElements([{symbol: "He", atomic: 2, name: "Helium"}])}

      {this.rowLeftElements([{symbol: "Li", atomic: 3, name: "Lithium"},
                             {symbol: "Be", atomic: 4, name: "Beryllium"}])}
      {this.rowRightElements([{symbol: "B", atomic: 5, name: "Boron"},
                              {symbol: "C", atomic: 6, name: "Carbon"},
                              {symbol: "N", atomic: 7, name: "Nitrogen"},
                              {symbol: "O", atomic: 8, name: "Oxygen"},
                              {symbol: "F", atomic: 9, name: "Fluorine"},
                              {symbol: "Ne", atomic: 10, name: "Neon"}])}

      {this.rowLeftElements([{symbol: "Na", atomic: 11, name: "Sodium"},
                             {symbol: "Mg", atomic: 12, name: "Magnesium"}])}
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
      </>
    );
  }

  render(){
    var details = "";
    if(this.state.hoveredElement){
      details = this.state.hoveredElement.name;
    }

    var selectedElements = "";
    for(var i = 0; i < this.state.selectedElements.length; i++) {
      selectedElements += this.state.selectedElements[i];
      if(i < this.state.selectedElements.length-1){
        selectedElements += ", ";
      }
    }

    const allElements = this.allElements();
    return (
      <div>
        <button onClick={() => {this.setState({selectedElements: []})}}>Reset</button>
        <div className="Table">
          {allElements}
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
