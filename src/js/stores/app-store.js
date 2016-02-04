var AppDispatcher = require('../dispatchers/app-dispatcher.js');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';
//var title_list = [];
var char_list = [];
var temp_list = ['Independent', 'Confident', 'Patient', 'Confident', 'Resourceful', 'Generous', 'Energetic', 'Ambitious', 'Optimistic', 'Clever', 'Encouraging', 'Humorous', 'Observant', 'Reliable', 'Accepting', 'Passionate'];

var title_list = ['Please choose 5 characteristics you value the most in a romantic partner.']

for(var i=0; i<(temp_list.length); i++) {
    char_list.push({
        'id': i,
        'title': temp_list[i]
    });
}

//for(var i=0; i<(temp_list2.length); i++) {
//    title_list.push({
//        'id': i,
//        'title': temp_list2[i]
//    });
//}

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
    //else {
    //    return {'message': 'Please select a unique characteristic'}
    //}
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
        }

        AppStore.emitChange();

        return true;
    })
})

module.exports = AppStore;
