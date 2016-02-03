var React = require('react');
var AppStore = require('../stores/app-store.js');
var RemoveFromList = require('../app-removefromlist.js'); h

function charlistItems() {
    return {items: AppStore.getList()}
}

var CharCart = React.createClass({
    getInitialState: function() {
        return charlistItems()
    },
    componentWillMount: function() {
        AppStore.addChangeListener(this._onChange)
    },
    _onChange: function() {
        this.setState(charlistItems())
    },
    render: function() {
        var items = this.state.items.map(function(item, i) {
            return (
                <tr key={i}>
                    <td><RemoveFromList index={i} /></td>
                    <td>{item.title}</td>
                </tr>
                );
    })
    return (
        <table className="table table-hover">
            <thread>
                <tr>
                    <th></th>
                    <th>Choosen Characteristics</th>
                </tr>
            </thread>
            <tbody>
                {items}
            </tbody>
        </table>
        )
    }
});

module.exports = CharCart
