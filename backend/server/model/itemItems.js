const mongoose = require('mongoose')


const itemItemsSchema = new mongoose.Schema({
    item:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('items', itemsItemsSchema);