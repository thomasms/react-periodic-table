import React from 'react';
import ReactDOM from 'react-dom';
import { GridColourElement } from './Element.js';

it('renders basic without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <GridColourElement
    element={{atomic: 1, symbol: "H"}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders with colour without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <GridColourElement
      colour={"blue"}
      element={{atomic: 3, symbol: "Li"}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders full props without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <GridColourElement
      key={1}
      colour={"blue"}
      element={{atomic: 23, symbol: "Ts"}}
      gridPosition={1} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
