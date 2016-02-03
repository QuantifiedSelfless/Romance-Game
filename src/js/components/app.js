var React = require('react');
var CharList = require('./app-charlist.js');

var App = React.createClass({
    render: function() {
        return (
            <div>
                //<Titles />
                <h1>Character List</h1> 
                <CharList />
                //<Cart />
            </div>
        );
    }
});

module.exports = App;
