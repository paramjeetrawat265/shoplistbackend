var cors = require('cors');
const express = require("express");
const { connection } = require("./Config/db");
const { BookmarkRoute } = require('./Routes/bookmarkRoute');
const { ShoppingRoute } = require("./Routes/shoppingRoute");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello Homepage")
})
app.use("/shopping", ShoppingRoute)
app.use("/bookmark", BookmarkRoute)

app.listen(PORT, async () => {
    try {
        await connection;
        console.log(`Connection is established on Port ${PORT}`)
    }
    catch (err) {
        console.log("error")
        console.log(err)
    }
})