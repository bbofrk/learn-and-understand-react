var Badge = React.createClass({displayName: "Badge",
  render: function()
  {
    return React.createElement("button", {type: "button", name: "button", className: "btn btn-primary"}, 
      this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
    )
  }
});

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

var ThumbnailList = React.createClass({displayName: "ThumbnailList",
  render: function(){
    var list = this.props.thumbnailData.map(function(thumbnailProps){
      return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
    });

    return React.createElement("div", null, 
      list
    )
  }
});

var Thumbnail = React.createClass({displayName: "Thumbnail",
  render: function(){
    return React.createElement("div", {className: "col-sm-6"}, 
      React.createElement("div", {className: "thumbnail"}, 
        React.createElement("img", {src: this.props.imageUrl, alt: "..."}), 
        React.createElement("div", {className: "caption"}, 
          React.createElement("h3", null, this.props.header), 
          React.createElement("p", null, this.props.description), 
          React.createElement("p", null, 
            React.createElement(Badge, {
              title: this.props.title, 
              number: this.props.number}
            )
          )
        )
      )
    )
  }
});
