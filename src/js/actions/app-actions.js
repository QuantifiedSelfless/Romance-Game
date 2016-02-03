var AppDispatcher = require("../dispatchers/app-dispatcher.js");

var AppActions = {
    addChar_: function(item) {
        AppDispatcher.handleViewAction({
            actionType: "ADD_CHAR_",
            item: item
        })
    },
    removeChar_: function(index) {
        AppDispatcher.handleViewAction({
            actionType: "REMOVE_CHAR_",
            index: index
        })
    }
}
module.exports = AppActions;
