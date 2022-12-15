const { default: mongoose } = require("mongoose");

const BookmarkSchema = mongoose.Schema({
    title: { type: String },
    quantity: { type: Number },
    priority: { type: String },
    date: { type: String },
    time: { type: String },
    description: { type: String }
}, { timestamps: true })

const BookmarkModel = mongoose.model("BookmarkProducts", BookmarkSchema);

module.exports = {
    BookmarkModel
}