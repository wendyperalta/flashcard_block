var React = require('react');
var PropTypes = require('prop-types');

var FrontOfFlashcard = React.createClass({
  propTypes: {
    content: PropTypes.object.isRequired
  },

  render: function() {
    var contentToShow = this.props.content.front;

    return (
      <div className="flashcard-content-type-text">
        {contentToShow}
      </div>
    ); 
  }
});

module.exports = FrontOfFlashcard;