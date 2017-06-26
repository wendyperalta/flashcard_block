var React = require('react');
var PropTypes = require('prop-types');
var Flashcard = require('./Flashcard');

//Displays the entire app
var App = React.createClass({
  propTypes: {
    flashcardsdata: PropTypes.array.isRequired
  },

  render: function() {
    var arrayOfFlashcardElements = [];
    var listOfFlashcards = this.props.flashcardsdata;

    //For each object in FLASHCARDSDATA array, create an instance of Flashcard component
    listOfFlashcards.forEach(function(flashcard){
      arrayOfFlashcardElements.push(
        //Pass the current's flashcard information to Flashcard component
        <Flashcard 
          key={flashcard.id}
          flashcardInfo={flashcard}/>
      );
    });

    return (
      <div>
        <div className="flashcard-container">
          {arrayOfFlashcardElements}
        </div>
      </div>
    );
  }
});

module.exports = App;