React = require('react');
AppStore = require('../stores/app-store.js');
    
var GameTitles = React.createClass({
    render: function() {
        var title_list = ['Please choose 5 personalities you value the most in a romantic partner.', 'Answer the following questions about a romantic partner with the following characteristics.'] 
        return (
            <h1>{title_list[this.props.stage]}</h1>
        )
    }
});

module.exports = GameTitles
