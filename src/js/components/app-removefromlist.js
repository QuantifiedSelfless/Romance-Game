var React = require('react');
var AppActions = require('../actions/app-actions.js');

var RemoveFromList = React.createClass({
    handler: function() {
        AppActions.removeChar_(this.props.index)
    },
    render: function() {
        return <h1 onClick={this.handler}>x</h1>
    }
});

module.exports = RemoveFromList;
