const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Account = new Schema({
    username: String,
    password: String,
    email: String,
    name: String,
    gender: String,
    birthdate: String,
    address: String,
    last_login: Date,
    date_joined: Date,
    mark_deleted: Date
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('accounts', Account);
