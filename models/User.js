//Details About Schema
const { model, Schema } = require('mongoose');
const { SECRET_KEY } = require('../config');

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    createdAt: String
});

module.exports = model('User', userSchema);