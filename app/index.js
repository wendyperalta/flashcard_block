var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');

//Displays the Flashcard
var Flashcard = React.createClass({
  // propTypes: {
  //   flashcards: PropTypes.array.isRequired
  // },

  render: function() {
    return (
      // <div>
      //   <FlashcardContent 
      //     type={this.props.flashcardInfo.type}
      //     front={this.props.flashcardInfo.front}
      //     back={this.props.flashcardInfo.back} />
      //   <ClickToFlip />
      // </div>
      <div>I'm flashcard {this.props.flashcardInfo.id}</div>
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
        <Flashcard flashcardInfo={flashcard} key={flashcard.id}/>
      );
    });

    return <div>{arrayOfFlashcardElements}</div>;
  }
});

var FLASHCARDSDATA = [
    {
        "id": 1,
        "type": "text", 
        "front": "Front of Card",
        "back": "Back of Card"
    },
    {
        "id": 2,
        "type": "image",
        "front": "Front of Card",
        "back": "background-image",
        "image": "coffee.jpg"
    },
    {
        "id": 3,
        "type": "paragraph",
        "front": "Front of Card",
        "back": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit sapien lectus, eu varius tellus pharetra non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin auctor justo at facilisis suscipit. Fusce a posuere neque."
    }
];

ReactDOM.render(
  //App takes data model as a prop
  <App flashcardsdata={FLASHCARDSDATA} />,
  document.getElementById('app')
);
