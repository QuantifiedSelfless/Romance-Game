var React = require('react');
var AppStore = require('../stores/app-store.js');
var AddToList = require('./app-addtolist.js');

function getCharList() {
    return {items: AppStore.getChar()}
}

var CharList = React.createClass({
    getInitialState: function() {
        return getCharList()
    },
    render: function() {
        var items = this.state.items.map(function(item){
            return (
                <AddToList item={item} intValue={this.props.intValue}/> 
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
