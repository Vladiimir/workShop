// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
    title: { type: String, required: true, unique: true },
    text: { type: String },
    image: { type: String }
});

// the schema is useless so far
// we need to create a model using it
var Article = mongoose.model('Article', userSchema);

// make this available to our users in our Node applications
module.exports = Article;