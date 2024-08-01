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

    async getOneRecordById(id) {
        return db[this.modelo].findByPk(id);
    }

}

module.exports = Service;