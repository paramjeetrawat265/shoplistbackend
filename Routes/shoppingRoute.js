const { Router } = require("express");
const { shoppingController, postShoppingController, getShoppingController, deleteShoppingController } = require("../Controller/shopping.controller");

const ShoppingRoute = Router();
ShoppingRoute.post("/", postShoppingController)
ShoppingRoute.get("/", getShoppingController)
ShoppingRoute.delete("/", deleteShoppingController)

module.exports = {
    ShoppingRoute
}