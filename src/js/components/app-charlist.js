var React = require('react');
var AppStore = require('../stores/app-store.js');
var AddToList = require('./app-addtolist.js');


var CharList = React.createClass({
    
    getInitialState: function () {
        return { items: AppStore.getChar() };
    },

    render: function() {
        var val = this.props.intValue;
        var items = this.state.items.map( function ( item ) {
            return (
                <AddToList item={item} intValue={val} /> 
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
