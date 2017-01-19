var React = require('react');

module.exports = React.createClass({
    displayName: 'EditForm',

    render: function () {
        return (
            <div>

                <form className="edit-form" name="edit-article">
                    <div className="input">
                        <span className="label">Title</span>
                        <input className="title" type="text" name="title" value={this.props.data.title} />
                    </div>

                    <div className="input">
                        <span className="label">Description</span>
                        <textarea className="text" name="text" cols="40" rows="5">{this.props.data.text}</textarea>
                    </div>

                    <div className="actions">
                        <input className="cancel-btn" type="button" value="cancel"/>
                        <input className="edit-btn" type="button" value="save" data-id={this.props.data.id}/>
                    </div>
                </form>
            </div>
        );
    }
});
