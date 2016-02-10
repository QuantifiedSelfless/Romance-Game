var React = require('react');
var AppStore = require('../stores/app-store.js');
var AddToList = require('./app-addtolist.js');


var CharList = React.createClass({
    
    getInitialState: function () {
        return { items: AppStore.getChar() };
    },
    
    render: function() {
        var items = this.state.items.map(function (item, i) {
            return (
                <AddToList item={item} key={i}/> 
            );
        });
    
        return (
            <div>
                {items}
            </div>
        )
    }
}); 

module.exports = CharList
