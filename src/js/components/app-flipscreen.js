React = require('react');

FlipScreen = React.createClass({
    
    handler: function() {
        AppActions.flipFromScreen()
    },

    render: function() {
        return (
            <div className="flex flex-column">
                <img className="logo-container2 mx-auto mb3" src="../src/js/img/arrows-26-128.png"></img>
                <button className="btn btn-primary mx-auto mt3" onClick={this.handler}>Continue</button>
            </div>
        )
    }
});

module.exports = FlipScreen;
