const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: {
        type: String,
        requried: true
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    }
})

module.exports = mongoose.model('Product', productSchema);