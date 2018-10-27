import React from 'react';
import { GridColourElement } from './Element.js';
import './Table.css';
import data from './data/data.json';

const MAX_LENGTH = 18;

class Table extends React.Component {

  constructor( props ) {
    super( props );

    this.state = {
      hoveredElement: null,
      selectedElements: []
    }
  }

  createElements(data, offset, base_colour="white"){
   var elements = [];
   for(var i = 0; i < data.length; i++) {
       var colour = base_colour;
       if(this.state.hoveredElement &&
          this.state.hoveredElement.symbol === data[i].symbol &&
          this.state.hoveredElement.mass === data[i].mass){
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

  rowMiddleElements(data){
    return (
      <>
      {this.createElements(data, 2, "grey")}
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

  createFromData(index){
    if(index < 0 || index > data.elements.length){
      return {
        symbol: "",
        atomic: -1,
        mass: -1,
        name: "",
        summary: ""
      };
    }
    return {
      symbol: data.elements[index].symbol,
      atomic: data.elements[index].number,
      mass: data.elements[index].atomic_mass,
      name: data.elements[index].name,
      summary: data.elements[index].summary
    };
  }

  createElementsInRange(start, end){
    var elements = [];
    for(var i=start-1; i<end;++i){
      elements.push(this.createFromData(i));
    }
    return elements;
  }

  // actual periodic table
  allElements(){
    return (
      <>
      {this.rowLeftElements(this.createElementsInRange(1, 1))}
      {this.rowRightElements(this.createElementsInRange(2, 2))}
      {this.rowLeftElements(this.createElementsInRange(3, 4))}
      {this.rowRightElements(this.createElementsInRange(5, 10))}
      {this.rowLeftElements(this.createElementsInRange(11, 12))}
      {this.rowRightElements(this.createElementsInRange(13, 18))}
      {this.rowLeftElements(this.createElementsInRange(19, 36))}
      {this.rowLeftElements(this.createElementsInRange(37, 54))}
      {this.rowLeftElements(this.createElementsInRange(55, 56))}
      {this.rowMiddleElements([{
        symbol: "",
        atomic: "",
        summary: "",
        mass: -1,
        name: ""
      }])}
      {this.rowRightElements(this.createElementsInRange(72, 86))}
      {this.rowLeftElements(this.createElementsInRange(87, 88))}
      {this.rowMiddleElements([{
        symbol: "",
        atomic: "",
        summary: "",
        mass: -2,
        name: ""
      }])}
      {this.rowRightElements(this.createElementsInRange(104, 118))}
      {this.rowMiddleElements(this.createElementsInRange(57, 71))}
      {this.rowMiddleElements(this.createElementsInRange(89, 103))}
      </>
    );
  }

  render(){
    var elementName = "";
    if(this.state.hoveredElement){
      elementName = this.state.hoveredElement.name;
    }

    var details = "";
    if(this.state.hoveredElement){
      details = this.state.hoveredElement.summary;
    }

    var info = "";
    if(this.state.hoveredElement && this.state.hoveredElement.mass > 0){
      info = this.state.hoveredElement.mass;
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
        {/*<button onClick={() => {this.setState({selectedElements: []})}}>Reset</button>*/}
        <div className="Table">
          {allElements}
        </div>
        <div className="Table-details">
          <h3>
            {elementName}
          </h3>
          <p>
            {info}
          </p>
          <p>
            {details}
          </p>
        </div>
        {/*
        <div className="Table-selector">
          <b>Selected elements:</b> {selectedElements}
        </div>
        */}
      </div>
    );
  }
}

export default Table;
