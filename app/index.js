var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');

var ClickToFlip = React.createClass({
  render: function() {
    return <p>Click to flip</p>
  }
});

var BackOfFlashcard = React.createClass({
  propTypes: {
    content: PropTypes.object.isRequired
  },

  render: function() {
    var typeClassName = "flashcard-content-type-" + this.props.content.type;
    var contentToShow = this.props.content.type === "image" ? "" : this.props.content.back; 
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

//Displays the Flashcard
var Flashcard = React.createClass({
  propTypes: {
    flashcardInfo: PropTypes.object.isRequired,
  },

  handleClick: function() {
    var flashcardElement = document.getElementById("flashcard" + this.props.flashcardInfo.id);
    var flippedClassName = "flashcard-flipped";
    var hasFlippedClass = $(flashcardElement).hasClass(flippedClassName);

    $(flashcardElement).toggleClass(flippedClassName, !hasFlippedClass);
  },

  render: function() {
    var flashcardId = "flashcard" + this.props.flashcardInfo.id;

    return (
      <div id={flashcardId} className="flashcard-box" onClick={this.handleClick}>
        <div id={"front" + this.props.flashcardInfo.id} className="flashcard-front">
          <FrontOfFlashcard content={this.props.flashcardInfo}/>
        </div>
        <div id={"back" + this.props.flashcardInfo.id} className="flashcard-back">
          <BackOfFlashcard content={this.props.flashcardInfo}/>
        </div>
      </div>
    );
  }
});

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

var FLASHCARDSDATA = [
    {
        "id": 1,
        "type": "text", 
        "front": "Front of Card 1",
        "back": "Back of Card"
    },
    {
        "id": 2,
        "type": "image",
        "front": "Front of Card 2",
        "back": "coffee.jpg"
    },
    {
        "id": 3,
        "type": "paragraph",
        "front": "Front of Card 3",
        "back": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit sapien lectus, eu varius tellus pharetra non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin auctor justo at facilisis suscipit. Fusce a posuere neque."
    }
];

ReactDOM.render(
  //App takes data model as a prop
  <App flashcardsdata={FLASHCARDSDATA} />,
  document.getElementById('app')
);
