var React = require('react');
var CharList = require('./app-charlist.js');
var GameTitles = require('./app-gametitles.js');
var CharCart = require('./app-charcart.js');

var App = React.createClass({
    getInitialState: function() {
        return {
            title: <GameTitles />,
            body: <CharList />, 
            misc: <CharCart />
        } 
    },
    render: function() {
        return (
            <div>
                <div>{this.state.title}</div>
                <div>{this.state.body}</div>
                <div>{this.state.misc}</div>
            </div>
        )
    }
});

module.exports = App;
