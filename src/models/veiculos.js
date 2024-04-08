const fs = require("fs");
class Veiculo {
    constructor({ modelo, anoFabricacao, numPortas, marca }) {
        this.modelo = modelo;
        this.anoFabricacao = anoFabricacao;
        this.numPortas = numPortas;
        this.marca = marca;
    }

    save() {
        let veiculosJSON = fs.readFileSync("./src/db/veiculos.json");
        if (veiculosJSON.length === 0) {
            let veiculos = new Array();
            veiculos.push(this);
            fs.writeFileSync(
                "./src/db/veiculos.json",
                JSON.stringify(veiculos)
            );
        } else {
            let veiculos = JSON.parse(veiculosJSON);
            veiculos.push(this);
            fs.writeFileSync(
                "./src/db/veiculos.json",
                JSON.stringify(veiculos)
            );
        }
    }
}

class Carro extends Veiculo {
    constructor({ modelo, anoFabricacao, numPortas, marca }) {
        super({ modelo, anoFabricacao, numPortas, marca });
    }
}

class Moto extends Veiculo {
    constructor({ modelo, anoFabricacao, marca, numPassageiros }) {
        super({ modelo, anoFabricacao, numPortas: 0, marca });
        this.numPassageiros = numPassageiros;
        this.rodas = 2;
    }
}

module.exports = { Veiculo, Carro, Moto };
