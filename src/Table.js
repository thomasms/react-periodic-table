import React from 'react';
import Element from './Element.js';
import './Table.css';

const MAX_LENGTH = 18;

function TableRowLeftElements(data){
  var elements = [];
  for(var i = 0; i < data.length; i++) {
      elements.push(
        <Element
          key={i}
          symbol={data[i].symbol}
          atomic={data[i].atomic}
          style={{gridColumnStart: i+1, gridColumnEnd: i+1}}
        />
      );
  }

  return (
    <>
    {elements}
    </>
  );
}

function TableRowRightElements(data){
  var elements = [];
  for(var i = 0; i < data.length; i++) {
      elements.push(
        <Element
          key={MAX_LENGTH-i}
          symbol={data[i].symbol}
          atomic={data[i].atomic}
          style={{gridColumnStart: MAX_LENGTH-data.length+i+1, gridColumnEnd: MAX_LENGTH-data.length+i+1}}
        />
      );
  }

  return (
    <>
    {elements}
    </>
  );
}

function Table(props) {
  return (
    <div className="Table">
      {TableRowLeftElements([{symbol: "H", atomic: 1}])}
      {TableRowRightElements([{symbol: "He", atomic: 2}])}

      {TableRowLeftElements([{symbol: "Li", atomic: 3},
                             {symbol: "Be", atomic: 4}])}
      {TableRowRightElements([{symbol: "B", atomic: 5},
                              {symbol: "C", atomic: 6},
                              {symbol: "N", atomic: 7},
                              {symbol: "O", atomic: 8},
                              {symbol: "F", atomic: 9},
                              {symbol: "Ne", atomic: 10}])}

      {TableRowLeftElements([{symbol: "Na", atomic: 11},
                             {symbol: "Mg", atomic: 12}])}
      {TableRowRightElements([{symbol: "Al", atomic: 13},
                              {symbol: "Si", atomic: 14},
                              {symbol: "P", atomic: 15},
                              {symbol: "S", atomic: 16},
                              {symbol: "Cl", atomic: 17},
                              {symbol: "Ar", atomic: 18}])}

      {TableRowLeftElements([{symbol: "K", atomic: 19},
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

     {TableRowLeftElements([{symbol: "Rb", atomic: 37},
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
  );
}

export default Table;
