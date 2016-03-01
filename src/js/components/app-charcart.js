var React = require('react');
var AppStore = require('../stores/app-store.js');
var RemoveFromList = require('./app-removefromlist.js');
var AppActions = require('../actions/app-actions.js');



var CharCart = React.createClass({
    
    getInitialState: function() {
        return {
            visible: 'hidden',
            items: AppStore.getQuestionList()
        };
    },

    componentWillMount: function() {
        AppStore.addChangeListener('cart_update', this._onChange);
        AppStore.addChangeListener('show_button', this._showButton);
        AppStore.addChangeListener('hide_button', this._hideButton);
    },

    componentWillUnmount: function() {
        AppStore.removeChangeListener('cart_update', this._onChange);
        AppStore.removeChangeListener('show_button', this._showButton);
        AppStore.removeChangeListener('hide_button', this._hideButton);
    },

    handler: function () {
        AppActions.flipToScreen()
    },

    _onChange: function() {
        this.setState({ items: AppStore.getQuestionList() });
    },

    _showButton: function() {
        this.setState({ visible: 'visible' });
    },

    _hideButton: function() {
        if (this.state.visible != 'hidden') {
            this.setState({ visible: 'hidden' });
        }
    },

    render: function() {
        var items = this.state.items.map(function(item, i) {
            return (
                <div className="col-2 left overflow-hidden" key={i}>
                    <div className="btn-primary overflow-hidden mr4">
                        <div className="left remove"> <RemoveFromList index={i} /> </div>
                        <div className="center px2"> {item.trait} </div>
                    </div>
                </div>
            );   
        })
        return (
            <div className="choosen">
                <h3>Choosen Characteristics</h3> 
                <div className="clearfix field">
                    {items}
                </div>
                <div className="confirm center">
                    <button className="btn btn-primary" style={{visibility: this.state.visible}} onClick={this.handler}>Confirm</button>
                </div>
            </div>
        )
    }
});

module.exports = CharCart
