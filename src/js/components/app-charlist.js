var React = require('react');
var AppStore = require('../stores/app-store.js');
var AddToList = require('./app-addtolist.js');

function getCharList() {
    return {items: AppStore.getList()}
}

var CharList = React.createClass({
    getInitialState: function() {
        return getCharList()
    },
    componentWillMount: function() {
        AppStore.addChangeListener(this._onChange)
    },
    _onChange: function() {
        this.setState(charItems())
    },
    render: function() {
        var items = this.state.items.map(function(item){
            return (
                <AddToCart item={item}/> 
        );
    })
    return (
        <div>
            {items}
        </div>
        )
    }
}); 

module.exports = CharList
