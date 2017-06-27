var React = require('react');
var PropTypes = require('prop-types');
var ClickToFlip = require('./ClickToFlip');

var FrontOfFlashcard = React.createClass({
  propTypes: {
    content: PropTypes.object.isRequired
  },

  render: function() {
    var contentToShow = this.props.content.front;
    var hideClickToFlip = this.props.content.id !== 1 ? true : false;
    var hideClickToFlipClass = hideClickToFlip ? "hide-click-to-flip" : "";

    return (
      <div> 
        <div className="flashcard-content-type-text">
          {contentToShow}
        </div>
        <div className={"click-to-flip " + hideClickToFlipClass}>
          <ClickToFlip />
        </div>
      </div>
    ); 
  }
});

module.exports = FrontOfFlashcard;