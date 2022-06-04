//Details About Schema
const { model, Scheme } = require('mongoose');

const userSchema = new Scheme({
    username: String,
    password: String,
    email: String,
    createdAt: String
})

module.exports = model('User', userSchema);