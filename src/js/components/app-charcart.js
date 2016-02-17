var React = require('react');
var AppStore = require('../stores/app-store.js');
var RemoveFromList = require('./app-removefromlist.js');
var AppActions = require('../actions/app-actions.js');



var CharCart = React.createClass({
    getInitialState: function() {
        return {items: AppStore.getStageList()};
    },
    componentWillMount: function() {
        AppStore.addChangeListener(this._onChange)
    },
    componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onChange)
    },
    _onChange: function() {
        this.setState({ items: AppStore.getStageList() });
    },
    render: function() {
        var items = this.state.items.map(function(item, i) {
            return (
                <div className="col-2 left overflow-hidden">
                    <div className="btn-primary overflow-hidden mr4">
                        <div className="left remove"> <RemoveFromList index={i} /> </div>
                        <div className="center px2"> {item.title} </div>
                    </div>
                </div>
            );   
        })
    return (
        <div className="choosen">
            <h3>Choosen Characteristics</h3> 
            <div className="clearfix">
                {items}
            </div>
        </div>
    )
    }
});

module.exports = CharCart
