var React = require('react');
var CharList = require('./app-charlist.js');
var GameTitles = require('./app-gametitles.js');
var CharCart = require('./app-charcart.js');
var AppStore = require('../stores/app-store.js');
var CharQuestion = require('./app-charquestions.js');
var App = React.createClass({
    getInitialState: function() {
        return {
            currState: 1,
            stage: 0,
            title: GameTitles, 
            body: CharList, 
            misc: CharCart
        } 
    },

    componentWillMount: function() {
        AppStore.addChangeListener(this._onChange);
    },

    _onChange: function() {
        switch(this.state.stage) {
            case 0:
                this.setState({ currState: this.state.currState + 1 });
                if (this.state.currState == 5) {
                    this.setState({ 
                        stage: this.state.stage + 1,
                        body: CharQuestion                               
                    });
                };
                break;

            case 1:
                break;
            case 2:
                break;
        }
    },
    render: function() {
        return (
            <div>
                <div><this.state.title stage={this.state.stage} /></div>
                <div><this.state.body /></div>
                <div><this.state.misc /></div>
            </div>
        )
    }
});

module.exports = App;
