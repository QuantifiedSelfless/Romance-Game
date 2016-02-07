React = require('react');
AppStore = require('../stores/app-store.js');
AppActions = require('../actions/app-actions.js');
AddToList = require('./app-addtolist.js');
CharAnswers = React.createClass({ 
    getInitialState: function() {
        return { items: AppStore.getAnswerTitles() }
    },
    render: function() {
        var items = this.state.items.map( function(item) {
            return (
                <AddToList item={item} />
            );
        });
        return  (
            <div>
                {items}
            </div>
        );
    }
});

module.exports = CharAnswers;
