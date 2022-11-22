const express = require("express");
const PORT = 3000;
const app = express();

// app.get("/", function (req, res) {
//     res.sendFile(__dirname + "/index.html");
// });

app.listen(
    PORT,
    () => console.log(`it's alive on https://localhost:${PORT}`)
);

app.get(
    '/tshirt',
    (req, res) => {
        res.status(200).send({
            tshirt: '👕',
            size: 'large'
        })
    }
);