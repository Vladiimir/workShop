var React = require('react');
var EditForm = require('./editForm');

module.exports = React.createClass({
    displayName: 'Article',

    render: function () {
        return (
            <div className={'article'}>
                <div className={'card'}>
                    <h4>{this.props.data.title}</h4>
                    <p>{this.props.data.text}</p>
                    <input className="delete-btn" type="button" value="delete" data-id={this.props.data.id} />
                    <input className="show-edit-btn" type="button" value="edit" />
                </div>
                <EditForm data={this.props.data} />
            </div>
        );
    }
});