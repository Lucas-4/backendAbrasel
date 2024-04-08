const express = require("express");
const { Carro, Moto } = require("./models/veiculos");
const app = express();
const cors = require("cors");

app.use(cors({ origin: "*" }));

app.use(express.json());

app.post("/veiculos", (req, res) => {
    if (req.body.tipo == "Carro") {
        const carro = new Carro(req.body);
        carro.save();
        console.log(carro);
    }
    if (req.body.tipo == "Moto") {
        const moto = new Moto(req.body);
        moto.save();
        console.log(moto);
    }
    res.status(201).send();
});

app.get("/test", (req, res) => {
    res.send("Hello world");
});

app.listen(3000);
