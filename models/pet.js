const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Pet = new Schema(
    {
        name: { type: String, required: true},
        age: { type: String, required: true},
        about: { type: String, required: true},
        picture: { type: String, required: true}
    }
)

module.exports = mongoose.model('pets', Pet)