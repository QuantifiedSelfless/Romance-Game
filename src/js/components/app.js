var React = require('react');
var CharList = require('./app-charlist.js');
var GameTitles = require('./app-gametitles.js');
var CharCart = require('./app-charcart.js');
var AppStore = require('../stores/app-store.js');
var CharQuestion = require('./app-charquestions.js');
var CharAnswers = require('./app-charanswers.js');
var Compatibility = require('./app-compatibility.js');
var PlayerPick = require('./app-playerpick.js');
var FlipScreen = require('./app-flipscreen.js');

var App = React.createClass({

    getInitialState: function() {
        return {
            flipscreen: false,
            currPlayer: 1,
            currState: 1,
            confirm_cart: true,
            stage: 0,
            titlestate: 0,
            end: 0,
            showResults: true,
            title: GameTitles, 
            body: CharList, 
            misc: CharCart,
        } 
    },

    componentWillMount: function() {
        AppStore.addChangeListener('switch_to_flipscreen', this._fliptoChange);
        AppStore.addChangeListener('switch_from_flipscreen', this._flipfromChange);
    },
    
    _fliptoChange: function() {
        this.setState({
            flipscreen: true,
            currPlayer: AppStore.switchPlayer(),
            body: FlipScreen,
            showResults: false
        });
    },

    _flipfromChange: function() {
        switch(this.state.stage) {
            case 0:
                this.setState({
                    stage: this.state.stage + 1,
                    flipscreen: false,
                    showResults: true,
                    body: CharList,
                    misc: CharCart
                });
                break; 

            case 1:
                AppStore.getState()
                this.setState({
                    state: this.state.stage + 1,
                    titlestate: this.state.titlestate + 1,
                    flipscreen: false,
                    showResults: true,
                    body: CharQuestion,
                    misc: CharAnswers
                }); 
                break;

            case 3:
                this.setState({
                    state: this.state.stage + 1,
                    flipscreen: false,
                    showResults: true,
                    body: CharQuestion,
                    misc: CharAnswers
                });
                break;

            case 4:
                this.setState({
                    titlestate: this.state.titlestate + 1,
                    flipscreen: false,
                    end: AppStore.getSum(),
                    showResults: false,
                    body: Compatibility,
                }); 
                break;
            
            break; 
        }
    },   

    render: function() {
        return (
            <div>
                <div>
                    <div className="titles">
                        <img className="logo-container" src="../src/js/img/Yellow-Tree-logo.png"></img>
                        <this.state.title stage={this.state.titlestate} flipscreen={this.state.flipscreen}/>
                    </div>
                    <div>{this.state.showResults ? <PlayerPick stuff={this.state.currPlayer} /> : null}</div>
                    <div><this.state.body stuff={this.state.end}/></div>
                </div> 
                <div>{this.state.showResults ? <this.state.misc /> : null}</div>
            </div>
        )
    }
});

module.exports = App;
