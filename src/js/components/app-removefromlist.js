var React = require('react');
var AppActions = require('../actions/app-actions.js');

var RemoveFromList = React.createClass({
    handler: function() {
        AppActions.removeChar(this.props.index, this.props.intValue)
    },
    render: function() {
        return <h1 onClick={this.handler}>x</h1>
    }
});

module.exports = RemoveFromList;
