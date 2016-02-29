var React = require('react');
var AppStore = require('../stores/app-store.js');
var AddToList = require('./app-addtolist.js');


var CharList = React.createClass({
    
    getInitialState: function () {
        return { items: AppStore.getTraits() };
    },
    
    render: function() {
        var items = this.state.items.map(function (item, i) {
            return (
                <AddToList item={item.trait} key={i}/> 
            );
        });
    
        return (
            <div className="flex flex-wrap charlist field">
                {items}
            </div>
        )
    }
}); 

module.exports = CharList
