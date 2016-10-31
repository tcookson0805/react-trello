import React from 'react';
import Card from './card';


var List = function(props) {
  
  return (
    <ul>
      <Card text={props.cards} />
      <Card text={props.cards} />
      <Card text={props.cards} />
    </ul>
  )
}

module.exports = List;