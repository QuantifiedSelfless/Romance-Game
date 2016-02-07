var React = require('react');
var AppActions = require('../actions/app-actions.js');

var AddToAnswers = React.createClass({
    getInitialState: function () {
        return {};
    },

    handler: function() {
        AppActions.addAnswer(this.props.item)
    },

    render: function() {
        return (
            <button onClick={this.handler}>{this.props.item.title}</button>);
    }
    
});

module.exports = AddToList;
