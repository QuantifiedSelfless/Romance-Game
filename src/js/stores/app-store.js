var AppDispatcher = require('../dispatchers/app-dispatcher.js');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _char_list = [];
var title_list = ['Independent', 'Patient', 'Confident', 'Resourceful', 'Generous', 'Energetic', 'Ambitious', 'Optimistic', 'Clever', 'Encouraging', 'Humorous', 'Observant', 'Reliable', 'Accepting', 'Passionate'];

for(var i=1; i<(title_list.length-1); i++) {
    _char_list.push({
        'id': i,
        'title': title_list[i]
    });
}

var _list_items = [];

function _removeChar_(index) {
    _list_items[index].inList = false;
    _list_items[index].splice(index, 1);
}

function _addChar_(item) {
    if(!char_.inList) {
        item['inList'] = true;
        _list_items.push(item);
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
    getList: function() {
        return _list_items
    },
    getChar_: function() {
        return _char_list
    },
    dispatcherIndex: AppDispatcher.register(function(payload) {
        var action = payload.action;
        switch(action.actionType) {
            case "ADD_CHAR_":
                _addChar_(payload.action.item);
                break;

            case "REMOVE_CHAR_":
                _removeChar_(payload.action.index);
                break;
        }

        AppStore.emitChange();

        return true;
    })
})

module.exports = AppStore;
