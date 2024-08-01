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

    async update(newData, id) {
        const registUpdate = db[this.modelo].update(newData, {
            where: {
                id: id
            }
        })

        return registUpdate[0] === 0 ? false: true;
    }

}

module.exports = Service;