const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    orderId: String,
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    productId: {
        type: mongoose.Types.ObjectId,
        ref: 'Product'
    },
    payment: {
        type: Boolean,
        default: false
    },
    amount: Number
})

module.exports = mongoose.model("Order", orderSchema)