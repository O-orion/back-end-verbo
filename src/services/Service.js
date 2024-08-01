const db = require('../database/models/index.js');

class Service {
    constructor(nomeModelo) {
        this.modelo = nomeModelo;
    }

    async getAll() {
        return db[this.modelo].findAll();
    }

    async createRegistry(dadosDoRegistro) {
        console.log(dadosDoRegistro)
        let dados = db[this.modelo].create(dadosDoRegistro);
        return dados;
    }

}

module.exports = Service;