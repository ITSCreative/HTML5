const express = require("express");
const path = require("path");

const app = express();

app.get("/", (request,response) => {
    console.log(path.resolve(__dirname, 'galeria.html'))

    response.sendFile(path.join(__dirname + 'galeria.html'))
});

app.listen(3000, () => {
    console.log("server running| on port", 3000);
})
