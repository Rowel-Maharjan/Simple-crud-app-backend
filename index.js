const express = require("express");
const app = express();
const port = "8000";
const hostname = "127.0.0.1";
const mongoose = require("mongoose");
const productRoute = require("./route/product.route.js")


//Middlewares
app.use(express.json());
app.use(express.urlencoded());


//Routes
app.use("/api/products", productRoute)


//Connection with database
mongoose.connect("mongodb://localhost:27017/Node-API")
    .then(() => {
        console.log("Connected Succesfully");
        app.listen(port, hostname, () => {
            console.log(`The server is runninig in http://${hostname}:${port}`);
        })
    })
    .catch(() => {
        console.log("Connection Failed");
    })

app.get("/", (req, res) => {
    res.send("Hello")
})

