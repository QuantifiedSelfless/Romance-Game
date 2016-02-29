React = require('react');
AppStore = require('../stores/app-store.js');

var Compatibility = React.createClass({

    render: function() { 
        var styles = {
            width: this.props.stuff + '%'
        } 
        return (
            <div> 
                <h1>{"You are " + this.props.stuff + " percent compatible."}</h1>
                <div className="meter yellow">
                    <span style={styles}></span>
                </div>
            </div>
        )
    }

});

module.exports = Compatibility;
