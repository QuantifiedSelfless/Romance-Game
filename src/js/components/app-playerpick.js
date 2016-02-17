React = require('react')

var PlayerPick = React.createClass({ 
    render: function() {
        return (
            <h3 className="center mr4">{this.props.stuff ? "Player 1 is currently picking" : "Player 2 is currently picking"}</h3>
        )
    }
});

module.exports = PlayerPick;
