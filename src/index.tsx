import React from 'react';
import ReactDOM from 'react-dom';

import DogIdentifier from './components/DogIdentifier/DogIdentifier';

ReactDOM.render(
  <React.StrictMode>
    <DogIdentifier />
  </React.StrictMode>,
  document.querySelector('#root'),
);
