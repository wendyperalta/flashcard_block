var React = require('react');
var Flashcard = require('./Flashcard');

var App = React.createClass({
  
  // calculate how many flashcards to display here based on data.json
    
  render: function() {
    return <Flashcard />;
  }
});

module.exports = App;