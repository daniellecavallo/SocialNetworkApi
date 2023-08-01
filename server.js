const express = require('express');


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())



app.listen(PORT, function() {
    console.log("Server running on " + PORT)
})