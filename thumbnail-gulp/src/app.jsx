var React = require('react');
var Thumbnaillist = require('./thumbnail-list');
var options = {
  thumbnailData: [{
    title: 'Show Course',
    number: 120,
    header: 'Learn React',
    description: 'React is Great',
    imageUrl: 'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png',
  }, {
    title: 'Show Course',
    number: 25,
    header: 'Learn Gulp',
    description: 'Gulp is awesome',
    imageUrl: 'http://brunch.io/images/others/gulp.png',
  }]
};

//React, please render this class
var Element = React.createElement(Thumbnaillist, options);

//React, after you render this class, please plac eit in my body tag
React.render(Element, document.querySelector('.target'));
