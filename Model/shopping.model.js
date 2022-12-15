const { default: mongoose } = require("mongoose");

const ShoppingSchema = mongoose.Schema({
    title: { type: String },
    quantity: { type: Number },
    priority: { type: String },
    date: { type: String },
    time: { type: String },
    description: { type: String }
}, { timestamps: true })

const ShoppingModel = mongoose.model("shoppingProducts", ShoppingSchema);

module.exports = {
    ShoppingModel
}