React = require('react');
AppStore = require('../stores/app-store.js');
AppActions = require('../actions/app-actions.js');
AddToAnswers = require('./app-addtoanswers.js');

CharAnswers = React.createClass({ 
    getInitialState: function() {
        return { items: AppStore.getAnswers() }
    },
    render: function() {
        var items = this.state.items.map( function(item) {
            return (
                <AddToAnswers item={item} />
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
