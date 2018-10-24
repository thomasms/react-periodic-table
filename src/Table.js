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
      {this.rowRightElements([{symbol: "Al", atomic: 13, name: "Aluminium"},
                              {symbol: "Si", atomic: 14, name: "Silicon"},
                              {symbol: "P", atomic: 15, name: "Phosphorus"},
                              {symbol: "S", atomic: 16, name: "Sulfur"},
                              {symbol: "Cl", atomic: 17, name: "Chlorine"},
                              {symbol: "Ar", atomic: 18, name: "Argon"}])}

      {this.rowLeftElements([{symbol: "K", atomic: 19, name: "Potassium"},
                             {symbol: "Ca", atomic: 20, name: "Calcium"},
                             {symbol: "Sc", atomic: 21, name: "Scandium"},
                             {symbol: "Ti", atomic: 22, name: "Titanium"},
                             {symbol: "V", atomic: 23, name: "Vanadium"},
                             {symbol: "Cr", atomic: 24, name: "Chromium"},
                             {symbol: "Mn", atomic: 25, name: "Manganese"},
                             {symbol: "Fe", atomic: 26, name: "Iron"},
                             {symbol: "Co", atomic: 27, name: "Cobalt"},
                             {symbol: "Ni", atomic: 28, name: "Nickel"},
                             {symbol: "Cu", atomic: 29, name: "Copper"},
                             {symbol: "Zn", atomic: 30, name: "Zinc"},
                             {symbol: "Ga", atomic: 31, name: "Gallium"},
                             {symbol: "Ge", atomic: 32, name: "Germanium"},
                             {symbol: "As", atomic: 33, name: "Arsenic"},
                             {symbol: "Se", atomic: 34, name: "Selenium"},
                             {symbol: "Br", atomic: 35, name: "Bromine"},
                             {symbol: "Kr", atomic: 36, name: "Krypton"}])}

     {this.rowLeftElements([{symbol: "Rb", atomic: 37, name: "Rubidium"},
                            {symbol: "Sr", atomic: 38, name: "Strontium"},
                            {symbol: "Y", atomic: 39, name: "Yttrium"},
                            {symbol: "Zr", atomic: 40, name: "Zirconium"},
                            {symbol: "Nb", atomic: 41, name: "Niobium"},
                            {symbol: "Mo", atomic: 42, name: "Molybdenum"},
                            {symbol: "Tc", atomic: 43, name: "Technetium"},
                            {symbol: "Ru", atomic: 44, name: "Ruthenium"},
                            {symbol: "Rh", atomic: 45, name: "Rhodium"},
                            {symbol: "Pd", atomic: 46, name: "Palladium"},
                            {symbol: "Ag", atomic: 47, name: "Silver"},
                            {symbol: "Cd", atomic: 48, name: "Cadmium"},
                            {symbol: "In", atomic: 49, name: "Indium"},
                            {symbol: "Sn", atomic: 50, name: "Tin"},
                            {symbol: "Sb", atomic: 51, name: "Antimony"},
                            {symbol: "Te", atomic: 52, name: "Tellurium"},
                            {symbol: "I", atomic: 53, name: "Iodine"},
                            {symbol: "Xe", atomic: 54, name: "Xenon"}])}
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
