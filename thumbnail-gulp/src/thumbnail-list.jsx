var React = require('react');
var Thumbnail = require('./thumbnail');

var Thumbnaillist = React.createClass({
  render: function() {
    var list = this.props.thumbnailData.map(function(data, index) {
      return <Thumbnail {...data} />
    });

    return <div>
      {list}
    </div>
  }
});

module.exports = Thumbnaillist;
