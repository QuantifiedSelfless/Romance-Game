'use strict';
var AppDispatcher = require('../dispatchers/app-dispatcher.js');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
//keeping track of gamestate in the store
var current_state = 0;

//declare object lists
var char_list = [];
var answer_titles = [];

//game data 
var flipmessage = ['Please flip the screen to player 1.', 'Please flip the screen to player 2'];
var title_list = ['Please choose 5 personalities you value the most in a romantic partner.', 'Answer the following questions about a romantic partner with the following characteristics.', 'Thanks for playing!'];
var temp_list = ['Considerate', 'Conscientious', 'Patient', 'Direct', 'Social', 'Disciplined', 'Deep', 'Experienced', 'Religious', 'Frugal', 'Freethinking', 'Generous', 'Loyal', 'Healthy', 'Optimistic', 'Responsible', 'Romantic', 'Well-Mannered', 'Sensitive', 'Protective'];
var question_list = ['Do you value others\' well being above your own?', 'Are you willing to sacrifice your free-time to achieve your goals and aspirations', 'Does it bother you when you have to wait on people', 'If you found a wallet on the ground, would you return it as you found it?', 'Would you normally rather stay home and read, or go out and spend time with a group of people?']
var temp_titles = ['Strongly Agree', 'Agree', 'Not Sure', 'Disagree', 'Strongly Disagree'];

//build list objects for data passed by dispatcher
for(var i=0; i<(temp_list.length); i++) {
    char_list.push({
        'id': i + 1,
        'stage': 0,
        'title': temp_list[i],
        'question': question_list[i]
    });
}    

for(var i=0;i<(temp_titles.length); i++) {
    answer_titles.push({
        'id': temp_titles.length - i,
        'stage': 1,
        'title': temp_titles[i]
    });
}

//player classes 
class player {
    constructor(id, active) {
        this.id = 'player' + id;
        this.stage = 0;
        this.active = active;
        this.characteristics = [];
        this.questions = [];
        this.sum = 0;
        this.total = 25;
    }
    addToList(item, thisList) {
        switch (this.stage) { 
            case 0:
                if (!item.inList) {
                    item['inList'] = true;
                    thisList.push(item);
                }
                break;
            case 1:
                thisList.push(item);
                break;
        }
    }
    removeFromList(index, thisList) {
        thisList[0]['inList'] = false;
        thisList.splice(index, 1);
    }
    isActive() {
        return this.active;
    }
    flipActive() {
        if (this.active) {
            this.addStage();
        }
        for (var i=0; i<char_list.length; i++) {
            char_list[i]['inList'] = false; 
        }
        this.active = !this.active;
    }
    activeStage() {
        return this.stage;
    }
    addStage() {
        this.stage += 1;
    }
    activeList() {
        if (!this.stage) {
            return this.characteristics;
        }
        else {
            return this.questions;
        }
    }
    sumList() {
        for (var i=0; i<(this.questions.length); i++) {
           this.sum += this.questions[i].id;
        }
        return (this.sum / 25)*50;
    }
}

//initializing player objects, player one is initalized as active
var Player_1 = new player(1, true);
var Player_2 = new player(2, false);

//swap active player function
function activePlayer() {
    var player = Player_1.isActive() ? Player_1 : Player_2;
    return player;
}

//AppStore event emitter
var AppStore = assign(EventEmitter.prototype, {
    emitChange: function(change) {
        this.emit(change)
    },
    addChangeListener: function(change, callback) {
        this.on(change, callback);
    },
    removeChangeListener: function(change, callback) {
        this.removeListener(change, callback);
    },

    //game specific functions
    currentPlayer: function() {
        return !Player_1.isActive() ? 1 : 0;
    },
    getAnswerTitles: function() {
        return answer_titles;
    },
    getTitles: function() {
        return title_list;
    }, 
    getQuestionList() {
        return question_list;
    },
    getChar: function() {
        return char_list;
    },
    switchPlayer: function() {
        Player_1.flipActive();
        Player_2.flipActive();
        return Player_1.isActive();
    },
    getStageList: function() {
        var player = activePlayer();
        return player.activeList();
    },
    getSum: function() {
        return Player_1.sumList() + Player_2.sumList();
    },
    flipscreen: function(i) {
        return flipmessage[i];
    },
    getState: function() {
        current_state++;
    },

    //event dispatcher
    dispatcherIndex: AppDispatcher.register(function(payload) {
        var action = payload.action;
        var player = activePlayer();
        var finalstate = false;
        switch(action.actionType) {
            
            //this triggers when things are added to the player lists
            case "ADD_CHAR":
                //this allows for different active list lengths for stage two question list
                var active_list_length = !player.activeStage() ? 5 : 5;
                //only add if cart has room
                if (player.activeList().length != active_list_length) {
                    player.addToList(payload.action.item, player.activeList());  
                    AppStore.emitChange('cart_update');
                }
                if (!current_state && (player.activeList().length == active_list_length)) {
                    //this is a 'confirm' button for the stage one cart
                    AppStore.emitChange('show_button');
                    break;
                }
                //this will trigger from the flipscreen continue button
                else if (player.activeList().length == active_list_length) {
                    if (Player_2.isActive()) { 
                        AppStore.emitChange('switch_from_flipscreen'); 
                        break;
                    }
                    AppStore.emitChange('switch_to_flipscreen');
                } 
                break;

            //this triggers only in stage one when things are removed from the app-cart 
            case "REMOVE_CHAR":
                player.removeFromList(payload.action.index, player.activeList()); 
                AppStore.emitChange('hide_button');
                AppStore.emitChange('cart_update');
                break;
                
            //these swap the game to and from the flipscreen state  
            case "FLIP_TO_SCREEN": 
                AppStore.emitChange('switch_to_flipscreen');
                break;

            case "FLIP_FROM_SCREEN": 
                AppStore.emitChange('switch_from_flipscreen');
                break;
        }

        return true;
    })
})

module.exports = AppStore;
