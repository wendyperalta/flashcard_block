var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');

var FLASHCARDSDATA = [
    {
        'id': 1,
        'type': 'text', 
        'front': 'Front of Card 1',
        'back': 'Back of Card'
    },
    {
        'id': 2,
        'type': 'image',
        'front': 'Front of Card 2',
        'back': 'coffee.jpg'
    },
    {
        'id': 3,
        'type': 'paragraph',
        'front': 'Front of Card 3',
        'back': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit sapien lectus, eu varius tellus pharetra non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin auctor justo at facilisis suscipit. Fusce a posuere neque. Ut ligula mi, efficitur eu dictum quis, scelerisque a felis. In aliquam justo nisi, vitae auctor velit mattis vel. In placerat odio non lacus maximus laoreet. Etiam nisi ex, dictum sit amet gravida pulvinar, euismod quis libero. Nulla sed purus pellentesque ligula malesuada mollis et a diam.'
    }
];

ReactDOM.render(
  //App takes data model as a prop
  <App flashcardsdata={FLASHCARDSDATA} />,
  document.getElementById('app')
);
