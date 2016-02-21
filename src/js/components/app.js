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
            currPlayer: 1,
            currState: 1,
            stage: 0,
            end: 0,
            showResults: true,
            title: GameTitles, 
            body: CharList, 
            misc: CharCart,
        } 
    },

    componentWillMount: function() {
        AppStore.addChangeListener('flip', this._flipChange);
        AppStore.addChangeListener('stage', this._stageChange);
    },
    
    _flipChange: function() {
        this.setState({
            flipscreen: true,
            currPlayer: AppStore.switchPlayer(),
            body: flipscreen,
            showResults: false
        });
    },

    _stageChange: function() {
        switch(this.state.stage) {

            case 0:
                this.state.stage++;
                this.setState({
                    flipscreen: false,
                    currPlayer: AppStore.switchPlayer(),
                    body: CharQuestion,
                    misc: CharAnswers
                }); 
                break;

            case 1:
                this.setState({
                    flipscreen: false,
                    end: AppStore.getSum(),
                    showResults: false,
                    body: Compatibility,
                }); 

            break;
    
        }
    },   
    /*_onChange: function() {
        console.log(this.state.playerlist.length);
        console.log(AppStore.getStageList().length)
        //check to see if the 'onChange' event was an addChar or a removeChar
        if (this.state.playerlist.length < AppStore.getStageList().length) { 
            switch(this.state.stage) { 
                case 0:
                    this.state.currState++;
                    if (this.state.currState == 5) {
                        if (!AppStore.switchPlayer()) {
                            //Switch player and reset cart
                            this.setState({
                                flipscreen: true,
                                currPlayer: 0,
                                //currState: 1,
                                 
                            });
                            break;
                        }
                        else { 
                            //switch player and change to stage two
                            this.state.stage++;
                            this.setState({ 
                                currPlayer: 1,
                                body: CharQuestion, 
                                misc: CharAnswers
                            });
                        }
                    };
                    break;
                case 1:
                    this.state.currState++;
                    if (this.state.currState == 5) {
                        if (!AppStore.switchPlayer()) {
                            this.setState({
                                currPlayer: 0,
                                currState: 1

                            });
                        }
                        else {
                            this.setState({
                                end: AppStore.getSum(),
                                showResults: false,
                                body: Compatibility,
                            });
                        }
                    };
                    break;
                }
        }
        else {
            //if 'removeChar' update the local playerlist
            this.setState({ playerlist: AppStore.getStageList() });
        }
    },*/
    render: function() {
        return (
            <div>
                <div>
                    <div className="titles">
                        <img className="logo-container" src="../src/js/img/Yellow-Tree-logo.png"></img>
                        <this.state.title stage={this.state.stage} flipscreen={this.state.flipscreen}/>
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
