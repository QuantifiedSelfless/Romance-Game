var React = require('react');
var AppActions = require('../actions/app-actions.js');

var AddToList = React.createClass({
    handler: function() {
        AppActions.addChar_(this.props.item)
    },
    render: function() {
        return <button onClick={this.handler}></button>    
    }
});

module.exports = AddToList;
