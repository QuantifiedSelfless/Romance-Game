React = require('react');
AppStore = require('../stores/app-store.js');
    
var GameTitles = React.createClass({
    getInitialState: function() {
        return {stage: 0}
    },
    componentWillMount: function() {
        AppStore.addChangeListener(this._onChange)
    },
    _onChange: function() {
        this.state.stage++; 
    },
    render: function() {
        var title_list = ['Please choose 5 personalities you value the most in a romantic partner.'] 
        return (
            <h1>{title_list[this.state.stage]}</h1>
        )
    }
});

module.exports = GameTitles
