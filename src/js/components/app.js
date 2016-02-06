var React = require('react');
var CharList = require('./app-charlist.js');
var GameTitles = require('./app-gametitles.js');
var CharCart = require('./app-charcart.js');
var AppStore = require('../stores/app-store.js');

var App = React.createClass({
    getInitialState: function() {
        return {
            currState: this.props.intValue,
            title: <GameTitles />,
            body: <CharList intValue={this.props.intValue} />, 
            misc: <CharCart intValue={this.props.intValue} />
        } 
    },

    componentWillMount: function() {
        AppStore.addChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState({ currState: this.state.currState + 1 });
        console.log(this.state.currState);
        if (newState == 5) { 
            this.state.body = <GameTitles />
        }
    },
    render: function() {
        return (
            <div>
                <div>{this.state.title}</div>
                <div>{this.state.body}</div>
                <div>{this.state.misc}</div>
            </div>
        )
    }
});

module.exports = App;
