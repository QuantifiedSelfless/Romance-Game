var AppDispatcher = require('../dispatchers/app-dispatcher.js');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var char_list = [];
var answer_titles = [];

var title_list = ['Please choose 5 personalities you value the most in a romantic partner.', 'Answer the following questions about a romantic partner with the following characteristics.'] 
var temp_list = ['Considerate', 'Dedicated', 'Patient', 'Honest', 'Sociable']
var question_list = ['Do you value others\' well being above your own?', 'Are you willing to sacrifice your free-time to achieve your goals and aspirations', 'Does it bother you when you have to wait on people', 'If you found a wallet on the ground, would you return it as you found it?']
var temp_titles = ['Strongly Agree', 'Agree', 'Not Sure', 'Disagree', 'Strongly Disagree']

for(var i=0; i<(temp_list.length); i++) {
    char_list.push({
        'stage': 0,
        'title': temp_list[i],
        'question': question_list[i]
    });
    
    answer_titles.push({
        'stage': 1,
        'title': temp_titles[i],
    });
}

//arrays to keep track of user answers
var cart_items = []; //stage 1
var answer_items = []; //stage 2

//stage 1 remove from cart
function removeChar(index) {
    cart_items[index].inList = false;
    cart_items.splice(index, 1); 
}

//stage 1, 2 keeping track of characteristics choosen, in addition to answers to the
//stage 2 questions
function addChar(item, list) {
    if(!item.inList) {
        item['inList'] = true;
        list.push(item);
    }
}

//stage 3 calculating compatibility
function sum(item) {
    for (var i=0; i<item.length; i++) {
        var j += item.id;
    };
    return j;
}

function percentCompatible(intValue1, intValue2) {
    var total = 50;
    var percent = (intValue1 + intValue2) / total;
    return percent;
}

var AppStore = assign(EventEmitter.prototype, {
    emitChange: function() {
        this.emit(CHANGE_EVENT)
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback)
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback)
    },
    getAnswerTitles: function() {
        return answer_titles
    },
    getTitles: function() {
        return title_list
    }, 
    getCart: function() {
        return cart_items
    },
    getChar: function() {
        return char_list
    },
    dispatcherIndex: AppDispatcher.register(function(payload) {
        var action = payload.action;
        switch(action.actionType) {
            case "ADD_CHAR":
                if (!payload.action.item.stage) {
                    addChar(payload.action.item, cart_items);
                }
                else {
                    addChar(payload.action.item, answer_items);
                }
                break;

            case "REMOVE_CHAR":
                removeChar(payload.action.index);
                break;
        }

        AppStore.emitChange();

        return true;
    })
})

module.exports = AppStore;
