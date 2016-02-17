var React = require('react');
var AppActions = require('../actions/app-actions.js');

var AddToList = React.createClass({
    getInitialState: function () {
        return {};
    },

    handler: function() {
        AppActions.addChar(this.props.item)
    },

    render: function() {
        return (
            <div className="col-2 center button-spacing"><button className="btn btn-primary" onClick={this.handler} key={this.props.key}>{this.props.item.title}</button></div>
        );
    }
    
});

module.exports = AddToList; 
