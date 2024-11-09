const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

// userSchema.methods.checkPassword = async (password) => {
//     return await bcrypt.compare(password, this.password);
// }

module.exports = mongoose.model("User", userSchema);