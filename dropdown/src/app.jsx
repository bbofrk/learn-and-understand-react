var React = require('react');
var Dropdown = require('./dropdown');

var options = {
  title: 'Choose a dessert',
  items: [
    'Apple Pie',
    'Peach Cobbler',
    'Coconut Cream Pie'
  ]
};

//render class
var element = React.createElement(Dropdown, options);

//After render place in body tag
React.render(
  element,
  document.querySelector('.container')
);
