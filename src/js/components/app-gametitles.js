React = require('react');
AppStore = require('../stores/app-store.js');
    
var GameTitles = React.createClass({
    
    getInitialState: function() {
        return { titles: AppStore.getTitles() }
    },

    render: function() { 
        return (
            <h1>{this.state.titles[this.props.stage]}</h1>
        )
    }

});

module.exports = GameTitles
