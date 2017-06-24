var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types'); //React.PropTypes is deprecated

//Displays the entire app
var App = React.createClass({
  propTypes: {
    flashcardsdata: PropTypes.array.isRequired
  },

  render: function() {
    return <Flashcard flashcards={this.props.flashcardsdata} />;
  }
});

var FLASHCARDSDATA = [
    {
        "type": "text", 
        "front": "Front of Card",
        "back": "Back of Card"
    },
    {
        "type": "image",
        "front": "Front of Card",
        "back": "background-image",
        "image": "coffee.jpg"
    },
    {
        "type": "paragraph",
        "front": "Front of Card",
        "back": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit sapien lectus, eu varius tellus pharetra non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin auctor justo at facilisis suscipit. Fusce a posuere neque."
    }
];

ReactDOM.render(
  //App takes data model as a prop
  <App flashcardsdata={FLASHCARDSDATA} />,
  document.getElementById('container')
);
