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
        AppStore.addChangeListener(this._onChange)
    },
    _onChange: function() {
        if (this.state.question < 5) { 
            this.setState({ 
                question: this.state.question + 1,
            });
        }
        else {
            this.setState({
                question: 0,
                items: AppStore.getChar()
            });
        }
    },
    render: function() {
        var items = this.state.items.map(function (item) {
            return (
                item.question
            );
        }); 
        return (
                <h1>{items[this.state.question]}</h1>
        );
    }
});

module.exports = CharQuestion;

