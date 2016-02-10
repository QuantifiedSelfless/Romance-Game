React = require('react');
AppStore = require('../stores/app-store.js');

var Compatibility = React.createClass({
    render: function() { 
        return (
                <h1>{"You are " + this.props.stuff + " percent compatible."}</h1>
        )
    }
});

module.exports = Compatibility;
