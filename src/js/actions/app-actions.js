var AppDispatcher = require("../dispatchers/app-dispatcher.js");

var AppActions = {
    addChar: function(item, intValue) {
        AppDispatcher.handleViewAction({
            actionType: "ADD_CHAR",
            item: item,
            intValue: intValue
        })
    },
    removeChar: function(index, intValue) {
        AppDispatcher.handleViewAction({
            actionType: "REMOVE_CHAR",
            index: index,
            intValue: intValue
        })
    },
}
module.exports = AppActions;
