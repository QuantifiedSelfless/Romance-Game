React = require('react');
AppStore = require('../stores/app-store.js');

var GameTitles = React.createClass({
    getInitialState: function() {
        return 0
    },
    componentWillMount: function() {
        AppStore.addChangeListener(this._onChange)
    },
    _onChange: function() {
        this.setState()
    },
    render: function() {
        return (
            <h1>this.state.items</h1>
        )
    }
});
