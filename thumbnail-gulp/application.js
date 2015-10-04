var options = {
  thumbnailData: [{
    title: 'Show Course',
    number: 12,
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

var Badge = React.createClass({displayName: "Badge",
  render: function() {
    return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
      this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
    )
  }
});

var Thumbnaillist = React.createClass({displayName: "Thumbnaillist",
  render: function() {
    var list = this.props.thumbnailData.map(function(data, index) {
      return React.createElement(Thumbnail, React.__spread({},  data))
    });

    return React.createElement("div", null, 
      list
    )
  }
});

var Thumbnail = React.createClass({displayName: "Thumbnail",
  render: function() {
    return React.createElement("div", {className: "thumbnail"}, 
      React.createElement("img", {src: this.props.imageUrl}), 
      React.createElement("div", {className: "caption"}, 
        React.createElement("h3", null, this.props.header), 
        React.createElement("p", null, this.props.description), 
        React.createElement("p", null, 
          React.createElement(Badge, {title: this.props.title, number: this.props.number})
        )
      )
    )
  }
});
