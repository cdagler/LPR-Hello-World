import React from 'react';
import ReactDOM from 'react-dom';

var Hello = React.createClass({
  render: function() {
    return (<span>Hello</span>);
  }
});

var World = React.createClass({
  render: function() {
    return (<span>World</span>);
  }
});

var HelloWorld = React.createClass({
  render: function() {
    return (
      <div><Hello/> <World/>!</div>
    );
  }
});

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('root')
);
