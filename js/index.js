require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board.js';

ReactDOM.render(
  <Board title="This is the big Board" lists={['title1', 'title2', 'title3']} />,
  document.getElementById('root')
)