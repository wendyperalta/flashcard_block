var React = require('react');
var PropTypes = require('prop-types');
var Flashcard = require('./FrontOfFlashcard');
var BackOfFlashcard = require('./BackOfFlashcard');
var FrontOfFlashcard = require('./FrontOfFlashcard');

//Displays the Flashcard
var Flashcard = React.createClass({
  propTypes: {
    flashcardInfo: PropTypes.object.isRequired,
  },

  getElement: function(id) {
    return $(document.getElementById(id + this.props.flashcardInfo.id));
  },

  handleClick: function() {
    var flippedClassName = 'flashcard-flipped';
    var flashcardElement = this.getElement('flashcard');
    var frontSide = this.getElement('front');
    var backSide = this.getElement('back');
    var hasFlippedClass = flashcardElement.hasClass(flippedClassName);

    flashcardElement.toggleClass(flippedClassName, !hasFlippedClass);
    backSide.toggleClass('hide-side', hasFlippedClass);
    frontSide.toggleClass('hide-side', !hasFlippedClass);
    frontSide.toggleClass(flippedClassName, !hasFlippedClass);
  },

  render: function() {
    var flashcardId = 'flashcard' + this.props.flashcardInfo.id;

    return (
      <div id={flashcardId} className='flashcard-box' onClick={this.handleClick}>
        <div id={'front' + this.props.flashcardInfo.id} className='flashcard-front'>
          <FrontOfFlashcard content={this.props.flashcardInfo}/>
        </div>
        <div id={'back' + this.props.flashcardInfo.id} className='flashcard-back hide-side'>
          <BackOfFlashcard content={this.props.flashcardInfo}/>
        </div>
      </div>
    );
  }
});

module.exports = Flashcard;