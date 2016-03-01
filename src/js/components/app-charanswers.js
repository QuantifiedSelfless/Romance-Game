React = require('react');
AppStore = require('../stores/app-store.js');
AppActions = require('../actions/app-actions.js');
AddToList = require('./app-addtolist.js');

CharAnswers = React.createClass({ 

    getInitialState: function() {
        return { 
            question_state: 0,
            questions: AppStore.getQuestionList(),
            titles: AppStore.getAnswerTitles(), 
            titles_flipped: AppStore.getFlippedTitles()
        }
    },

    addChangeListener: function() {
        AppStore.addChangeListener('cart_update', this.handler);
    },

    removeChangeListener: function() {
        AppStore.removeChangeListener('cart_update', this.handler);
    }, 

    handler: function() {
        this.question_state++;
    },
        
    render: function() {
        var items = []
        for (var i=0; i<this.state.questions.length; i++) {
            if (!this.state.questions[i].flipped) {
                items.push(this.state.titles.map( function(item, i) {
                    return (
                        <AddToList item={item} stage={1} key={i}/>
                    )
                }))
            }
            else {
                items.push(this.state.titles_flipped.map( function(item, i) {
                    return (
                        <AddToList item={item} stage={1} key={i}/>
                    )
                }))
            }
        }
        console.log(items);
        return  (
            <div className="flex justify field">
                {items[this.state.question_state]}
            </div>
        );
    }

});

module.exports = CharAnswers;
