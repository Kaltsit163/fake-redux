import React from 'react';
import ReactDOM from 'react-dom';

import Index from './views/Homepage/index';

import './style/reset.css';


import Service from './Service';

ReactDOM.render(
  <Index />,
  document.getElementById('root'));
  
Service();
