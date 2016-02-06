var React = require('react');
var AppStore = require('../stores/app-store.js');
var RemoveFromList = require('./app-removefromlist.js');
var AppActions = require('../actions/app-actions.js')



var CharCart = React.createClass({
    getInitialState: function() {
        return {items: AppStore.getCart()};
    },
    componentWillMount: function() {
        AppStore.addChangeListener(this._onChange)
    },
    _onChange: function() {
        this.setState(charlistItems())
    },
    render: function() {
        var val = this.props.intValue
        var items = this.state.items.map(function(item, i) {
            return (
                <tr key={i}>
                    <td><RemoveFromList index={i} intValue={val}/></td>
                    <td>{item.title}</td>
                </tr>
            );
    })
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th></th>
                    <th>Sarah Rocks</th>
                </tr>
            </thead>
            <tbody>
                {items}
            </tbody>
        </table>
        )
    }
});

module.exports = CharCart
