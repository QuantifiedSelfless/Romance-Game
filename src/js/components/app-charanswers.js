React = require('react');
AppStore = require('../stores/app-store.js');
AppActions = require('../actions/app-actions.js');
AddToList = require('./app-addtolist.js');

CharAnswers = React.createClass({ 
    getInitialState: function() {
        return { items: AppStore.getAnswerTitles() }
    },
    render: function() {
        var items = this.state.items.map( function(item, i) {
            return (
                <AddToList item={item} key={i}/>
            );
        });
        return  (
            <div className="flex justify field">
                {items}
            </div>
        );
    }
});

module.exports = CharAnswers;
