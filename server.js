const express = require('express');
const dataBase = require("./config/connection")
const routes = require("./routes")


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(routes)


dataBase.once("open", () => {
    app.listen(PORT, function() {
    console.log("Server running on " + PORT)
})
})
