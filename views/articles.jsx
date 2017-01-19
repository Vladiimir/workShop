var React = require('react');
var Article = require('./article');

module.exports = React.createClass({
    displayName: 'Articles',

    render: function () {
        return (
            <div>
                <div id="alrticles-list">
                    {this.getArticlesList()}
                </div>
            </div>
        );
    },

    getArticlesList: function() {
        var articles = [];
        for(var i = 0; i < this.props.data.length; i++) {
            articles.push(<Article key={i} data={this.props.data[i]} />);
        }
        return articles;
    }
});