React = require('react');
AppStore = require('../stores/app-store.js');

var FinalThoughts = React.createClass({

    getInitialState: function() {
        return {
            similar: "You both chose the same " + AppStore.getSimilarChar().length + " characteristics.",
            thoughts: AppStore.getThoughts(),
            sum: AppStore.getSum()
        }
    },

    render: function() {
        var temp = 0;
        if (this.state.sum > 30 && this.state.sum < 60) { temp = 1; };
        if (this.state.sum > 60) { temp = 2; };
        return (
            <div className="center">
                <h3>{this.state.similar}</h3>
                <h3>{this.state.thoughts[temp]}</h3>
            </div>
        )
    }
});

module.exports = FinalThoughts;
