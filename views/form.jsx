var React = require('react');

module.exports = React.createClass({
    displayName: 'Form',

    render: function () {
        return (
            <div>

                <h1>Articles</h1>

                <form id="add-form" name="add-estimation">
                    <div className="input">
                        <span className="label">Title</span>
                        <input id="title" type="text" name="title" />
                    </div>

                    <div className="input">
                        <span className="label">Description</span>
                        <textarea id="text" name="text" cols="40" rows="5"></textarea>
                    </div>

                    <div className="actions">
                        <input id="add-btn" type="button" value="add"/>
                    </div>
                </form>
            </div>
        );
    }
});