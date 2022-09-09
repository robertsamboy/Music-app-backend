const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
    description: String,
    complete: Boolean
});

const Music = mongoose.model('Music', musicSchema);

module.exports = Music;