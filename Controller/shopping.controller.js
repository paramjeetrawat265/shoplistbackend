const { ShoppingModel } = require("../Model/shopping.model");


const postShoppingController = async (req, res) => {
    const { title, quantity, priority, date, time, description } = req.body;
    const check = await ShoppingModel.findOne({ title: title })
    if (check) {
        res.send({ msg: 'Product already exist' });
    }
    else {
        const data = new ShoppingModel({
            title, quantity, priority, date,
            time, description
        });
        data.save();
        res.send({ msg: "Product Added" })
    }
}

const getShoppingController = async (req, res) => {
    const data = await ShoppingModel.find()
    res.send({ msg: "dataFound", data: data })
}

const deleteShoppingController = async (req, res) => {
    const data = await ShoppingModel.deleteOne(req.body)
    res.send({msg:"delete"})
}

module.exports = {
    postShoppingController, getShoppingController, deleteShoppingController
}