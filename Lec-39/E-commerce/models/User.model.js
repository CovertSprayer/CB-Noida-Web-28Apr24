const { number } = require('joi');
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }, 
    role: {
        type: String,
        required: true,
        enum: ['seller', 'buyer']
    },
    cart: [
        {
            _id: false,
            product: {
                type: mongoose.Types.ObjectId,
                ref: 'Product'
            },
            quantity: {
                type: Number,
                default: 1,
                min: 1
            }
        }
    ],
    wishList: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Product'
        }
    ]
    // password: String
})

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);