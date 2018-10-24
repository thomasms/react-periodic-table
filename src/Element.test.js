import React from 'react';
import ReactDOM from 'react-dom';
import { GridColourElement } from './Element.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <GridColourElement
      key={1}
      colour={"blue"}
      element={{atomic: 23, symbol: "Ts"}}
      gridPosition={1} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
