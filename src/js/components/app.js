var React = require('react');
var CharList = require('./app-charlist.js');
var GameTitles = require('./app-gametitles.js');
var CharCart = require('./app-charcart.js');
var AppStore = require('../stores/app-store.js');
var CharQuestion = require('./app-charquestions.js');
var CharAnswers = require('./app-charanswers.js');
var Compatibility = require('./app-compatibility.js');

var App = React.createClass({
    getInitialState: function() {
        return {
            currState: 1,
            stage: 0,
            end: 0,
            showResults: true,
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
                        currState: 1,  
                        stage: this.state.stage + 1,
                        body: CharQuestion,                               
                        misc: CharAnswers
                    });
                };
                break;
            case 1:
                this.setState({ currState: this.state.currState + 1});
                if (this.state.currState == 5) {
                    this.setState({
                        end: AppStore.getSum(),
                        showResults: false,
                        stage: this.state.stage + 1,
                        body: Compatibility,
                    });
                };
                break;
        }
    },
    render: function() {
        return (
            <div>
                <div><this.state.title stage={this.state.stage} /></div>
                <div><this.state.body stuff={this.state.end} /></div>
                <div>{this.state.showResults ? <this.state.misc /> : null }</div>
            </div>
        )
    }
});

module.exports = App;
