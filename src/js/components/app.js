var React = require('react');
var CharList = require('./app-charlist.js');
var GameTitles = require('./app-gametitles.js');
var CharCart = require('./app-charcart.js');
var AppStore = require('../stores/app-store.js');
var CharQuestion = require('./app-charquestions.js');
var CharAnswers = require('./app-charanswers.js');
var Compatibility = require('./app-compatibility.js');
var PlayerPick = require('./app-playerpick.js');

var App = React.createClass({
    getInitialState: function() {
        return {
            currPlayer: 1,
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
                if (this.state.currState == 6) {
                    if (!AppStore.switchPlayer()) {
                        this.setState({
                            currPlayer: 0,
                            currState: 1,
                        });
                        break;
                    }
                    else { 
                        this.setState({ 
                            currPlayer: 1,
                            currState: 1,  
                            stage: this.state.stage + 1,
                            body: CharQuestion, 
                            misc: CharAnswers
                        });
                    }
                };
                break;
            case 1:
                this.setState({ currState: this.state.currState + 1});
                if (this.state.currState == 5) {
                    if (!AppStore.switchPlayer()) {
                        this.setState({
                            currState: 0,
                            currPlayer: 1,
                        });
                    }
                    else {
                        this.setState({
                            currPlayer: 1,
                            end: AppStore.getSum(),
                            showResults: false,
                            stage: this.state.stage + 1,
                            body: Compatibility,
                        });
                    }
                };
                break;
        }
    },
    render: function() {
        return (
            <div>
                <div>
                    <div className="titles">
                        <img className="logo-container" src="../src/js/img/Yellow-Tree-logo.png"></img>
                        <this.state.title stage={this.state.stage} />
                    </div>
                    <div>{this.state.showResults ? <PlayerPick stuff={this.state.currPlayer}/> : null}</div>
                    <div><this.state.body stuff={this.state.end} /></div>
                </div>
                <div>{this.state.showResults ? <this.state.misc /> : null}</div>
            </div>
        )
    }
});

module.exports = App;
