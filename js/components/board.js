import React from 'react';
import List from './list';


var Board = function(props){
  return (
    <div> 
      <h1>{props.title}</h1>
      <List title={props.lists[0]} cards="this is the content" />
      <List title={props.lists[1]} cards="this is some more content" />
      <List title={props.lists[2]} cards="this is even more content" />
    </div>
  )
}

module.exports = Board;