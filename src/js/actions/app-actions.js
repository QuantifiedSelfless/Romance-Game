var AppDispatcher = require("../dispatchers/app-dispatcher.js");

var AppActions = {
    addChar: function(item) {
        AppDispatcher.handleViewAction({
            actionType: "ADD_CHAR",
            item: item,
        })
    },
    removeChar: function(index) {
        AppDispatcher.handleViewAction({
            actionType: "REMOVE_CHAR",
            index: index,
        })
    },
    flipScreen: function() {
        AppDispatcher.handleViewAction({
            actionType: "FLIP_SCREEN",
        })
    },
}
module.exports = AppActions;
