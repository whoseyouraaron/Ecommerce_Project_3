const mongoose = require('mongoose')
const { stringify } = require('querystring')

const ItemsSchema = mongoose.Schema({
    item:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('items', ItemsSchema);