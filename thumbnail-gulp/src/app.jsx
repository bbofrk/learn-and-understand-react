var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
  thumbnailData: [
    {
      title: "Inbox",
      number: 32,
      header: 'Learn React',
      description: 'React is a fantastic new front end library for rendering Website',
      imageUrl: 'https://facebook.github.io/react/img/logo.svg'
    },
    {
      title: "Show Course",
      number: 25,
      header: 'Learn Gulp',
      description: 'Gulp will speed up your development workflow.',
      imageUrl: 'http://brunch.io/images/others/gulp.png'
    }
  ]
};

//render class
var element = React.createElement(ThumbnailList, options);

//After render place in body tag
React.render(
  element,
  document.querySelector('.container')
);
