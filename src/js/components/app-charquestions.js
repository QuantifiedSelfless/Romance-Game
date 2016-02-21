React = require('react');
AppStore = require('../stores/app-store.js');

CharQuestion = React.createClass({
    getInitialState: function() {
        return {
            question: 0,
            items: AppStore.getChar()
        };
    },
    componentWillMount: function() {
        AppStore.addChangeListener('cart_update', this._onChange)
    },
    _onChange: function() {
        this.state.question++;    
    },
    render: function() {
        var items = this.state.items.map(function (item) {
            item['stage'] = 1;
            return (
                item.question
            );
        }); 
        return (
                <h1 className="charquestion bold title-font">{items[this.state.question]}</h1>
        );
    }
});

module.exports = CharQuestion;

