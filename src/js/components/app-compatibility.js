React = require('react');
AppStore = require('../stores/app-store.js');

var Compatibility = React.createClass({
    getInitialState: function() {
        return { key: this.props.key }
    },
    render: function() {
        return (
                <h1>"Thanks for playing! You are" + {this.state.key} + " percent compatible"</h1>
        )
    }
});

module.exports = Compatibility;
