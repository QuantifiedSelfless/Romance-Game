React = require('react');

FlipScreen = React.createClass({
    
    handler: function() {
        AppActions.flipScreen()
    },

    render: function() {
        return (
            <div>
                <img className="logo-container" src="../src/js/img/arrows-26-128.png"></img>
                <button className="btn btn-primary" onClick={this.handler}>Continue</button>
            </div>
        )
    }
});

module.exports = FlipScreen;
