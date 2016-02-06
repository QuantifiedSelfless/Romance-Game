var AppDispatcher = require("../dispatchers/app-dispatcher.js");

var AppActions = {
    addChar: function(item, intValue) {
        AppDispatcher.handleViewAction({
            actionType: "ADD_CHAR",
            item: item,
        })
    },
    removeChar: function(index, intValue) {
        AppDispatcher.handleViewAction({
            actionType: "REMOVE_CHAR",
            index: index,
        })
    },
}
module.exports = AppActions;
