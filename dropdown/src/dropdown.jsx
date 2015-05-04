//We need to show a button and a list
// this component should know when to show the list
// based on when the user clicks the button

var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass({
  handleClick: function() {

  },
  render: function() {
    var list = this.props.items.map(function(item) {
      return <ListItem item={item}/>
    });
    return <div className="dropdown">
      <Button
        className="btn-default"
        title={this.props.title}
        subTitleClassName="caret"
        whenClicked={this.handleClick}
      />
      <ul>
        {list}
      </ul>
    </div>
  }
});
