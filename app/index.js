var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');

var FlashcardContent = React.createClass({
  propTypes: {
    content: PropTypes.object.isRequired
  },

  render: function() {
    var currentSide = "front"; //might be a state
    var contentToShow = currentSide == "front" ? this.props.content.front : this.props.content.back;
    
    return (
      <div>
        {contentToShow}
      </div>
    ); 

  }
});

//Displays the Flashcard
var Flashcard = React.createClass({
  propTypes: {
    flashcardInfo: PropTypes.object.isRequired
  },

  render: function() {
    return (
      <div>
        <FlashcardContent content={this.props.flashcardInfo}/>
        {/*<ClickToFlip />*/}
      </div>
    );
  }
});

//Displays the entire app
var App = React.createClass({
  propTypes: {
    flashcardsdata: PropTypes.array.isRequired
  },

  handleClick: function() {
    console.log('flip me');

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
          flashcardInfo={flashcard}
          onClick={this.handleClick}/>
      );
    });

    return <div>{arrayOfFlashcardElements}</div>;
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
        "back": "background-image",
        "image": "coffee.jpg"
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
