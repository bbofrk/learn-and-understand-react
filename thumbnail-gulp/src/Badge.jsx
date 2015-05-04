var React = require('react');
module.exports = React.createClass({
  render: function()
  {
    return <button type="button" name="button" className="btn btn-primary">
      {this.props.title} <span className="badge">{this.props.number}</span>
    </button>
  }
});
