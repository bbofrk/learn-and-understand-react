var React = require('react');
module.exports = React.createClass({
  render: function() {
    return <button type="button" name="button" className={"btn " + this.props.className} onClick={this.props.whenClicked}>
      {this.props.title}
      <span className={this.props.subTitleClassName}>{this.props.subTitle}</span>
    </button>
  }
});
