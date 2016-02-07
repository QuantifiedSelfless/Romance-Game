var AppDispatcher = require('../dispatchers/app-dispatcher.js');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';
//var title_list = [];
var char_list = [];

var temp_list = ['Considerate', 'Dedicated', 'Patient', 'Honest', 'Sociable']
var question_list = ['Do you value others\' well being above your own?', 'Are you willing to sacrifice your free-time to achieve your goals and aspirations', 'Does it bother you when you have to wait on people', 'If you found a wallet on the ground, would you return it as you found it?']

for(var i=0; i<(temp_list.length); i++) {
    char_list.push({
        'title': temp_list[i],
        'question': question_list[i]
    });
}

var cart_items = [];

function removeChar(index) {
    cart_items[index].inList = false;
    cart_items.splice(index, 1); 
}

function addChar(item) {
    if(!item.inList) {
        item['inList'] = true;
        cart_items.push(item);
    }
}

function addAnswer(item) {
    if(!item.inList) {
        item['inList'] = true;
        answer_list.push(item);
    }
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
                addChar(payload.action.item);
                break;

            case "REMOVE_CHAR":
                removeChar(payload.action.index);
                break;
            
            case "ADD_ANSWER":
                addAnswer(payload.action.item);
                break;
        }

        AppStore.emitChange();

        return true;
    })
})

module.exports = AppStore;
