var React = require('react');
var PropTypes = require('prop-types');

var BackOfFlashcard = React.createClass({
  propTypes: {
    content: PropTypes.object.isRequired
  },

  render: function() {
    var typeClassName = 'flashcard-content-type-' + this.props.content.type;
    var contentToShow = this.props.content.type === 'image' ? '' : this.props.content.back; 
    var backgroundImage = {
      backgroundImage: 'url(../' + this.props.content.back + ')',
    };

    return (
      <div className={typeClassName} style={backgroundImage}>
        {contentToShow}
      </div>
    ); 
  }
});

module.exports = BackOfFlashcard;