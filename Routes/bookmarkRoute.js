const { Router } = require("express");
const { getBookmarkController, postBookmarkController } = require("../Controller/bookmark.controller");


const BookmarkRoute = Router();
BookmarkRoute.post("/", postBookmarkController)
BookmarkRoute.get("/", getBookmarkController)

module.exports = {
    BookmarkRoute
}