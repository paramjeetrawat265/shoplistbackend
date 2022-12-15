const { BookmarkModel } = require("../Model/bookmark.model");


const postBookmarkController = async (req, res) => {
    const { title, quantity, priority, date, time, description } = req.body;
    const check = await BookmarkModel.findOne({ title: title })
    if (check) {
        res.send({ msg: 'Bookmark exist' });
    }
    else {
        const data = new BookmarkModel({
            title, quantity, priority, date,
            time, description
        });
        data.save();
        res.send({ msg: "Bookmark Added" })
    }
}

const getBookmarkController = async (req, res) => {
    const data = await BookmarkModel.find()
    res.send({ msg: "dataFound", data: data })
}

module.exports = {
    postBookmarkController, getBookmarkController
}