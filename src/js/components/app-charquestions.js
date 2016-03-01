React = require('react');
AppStore = require('../stores/app-store.js');

CharQuestion = React.createClass({

    getInitialState: function() {
        return {
            question: 0,
            items: AppStore.getQuestionList()
        };
    },

    componentWillMount: function() {
        AppStore.addChangeListener('cart_update', this._onChange)
    },

    componentWillUnmount: function() {
        AppStore.removeChangeListener('cart_update', this._onChange)
    },

    _onChange: function() { 
        this.setState({ 
            question: this.state.question + 1,
        });
    },

    render: function() {
        return (
                <h1 className="charquestion bold title-font">{this.state.items[this.state.question].question}</h1>
        );
    }

});

module.exports = CharQuestion;

