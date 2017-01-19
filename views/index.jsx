var React = require('react');
var Form = require('./form');
var Articles = require('./articles');

module.exports = React.createClass({
    displayName: 'Index',

    render: function () {
        return (
            <html>
                <head>
                    <title>{'Articles'}</title>
                    <link rel="stylesheet" type="text/css" href="/stylesheets/style.css"/>
                    <script src="/javascripts/jquery-3.1.1.min.js"></script>
                    <script src="/javascripts/script.js"></script>
                </head>
                <body>
                    <div id="body-wrapper">
                        <Form />
                        <Articles data={this.props.data}/>
                    </div>
                </body>
            </html>
        );
    }
});