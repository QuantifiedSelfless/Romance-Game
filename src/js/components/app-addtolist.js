var React = require('react');
var AppActions = require('../actions/app-actions.js');

var AddToList = React.createClass({
    getInitialState: function () {
        return {};
    },

    handler: function() {
        AppActions.addChar(this.props.item, this.props.intValue)
    },

    render: function() {
        return (
            <button onClick={this.handler}>{this.props.item.title}</button>);
    }
    
});

module.exports = AddToList;
