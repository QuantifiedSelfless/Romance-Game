var AppDispatcher = require("../dispatchers/app-dispatcher.js");

var AppActions = {
    addChar: function(item) {
        AppDispatcher.handleViewAction({
            actionType: "ADD_CHAR",
            item: item
        })
    },
    removeChar_: function(index) {
        AppDispatcher.handleViewAction({
            actionType: "REMOVE_CHAR",
            index: index
        })
    }
}
module.exports = AppActions;
