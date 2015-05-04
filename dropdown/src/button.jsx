var React = require('react');
module.exports = React.createClass({
  handleClick: function() {

  },
  render: function() {
    return <button type="button" name="button" className={"btn " + this.props.className} onClick={this.handleClick}>
      {this.props.title}
      <span className={this.props.subTitleClassName}>{this.props.subTitle}</span>
    </button>
  }
});
