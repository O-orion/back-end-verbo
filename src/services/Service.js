const db = require('../database/models/index.js');

class Service {
    constructor(nomeModelo) {
        this.modelo = nomeModelo;
    }

    async getAll() {
        return db[this.modelo].findAll();
    }

    async createRegistry(dadosDoRegistro) {
        try {
            let dados = db[this.modelo].create(dadosDoRegistro);
            return dados;
        } catch (error) {
            throw new Error(error.errors.map(e => e.message).join(", "))
        }
    }

    async getOneRecordById(id) {
        return db[this.modelo].findByPk(id);
    }

    async update(newData, id) {
        try {
            const registro = this.getOneRecordById(id);

            if(!registro) {
                throw new Error("Registro não encontrado.");
            }

            const registUpdate = db[this.modelo].update(newData, {
                where: {
                    id: id
                }
            })
    
            return registUpdate[0] === 0 ? false: true;
            
        } catch (error) {
            throw new Error(error.errors.map(e => e.message).join(", "))
        }
    }

    async delete(id) {
        const result = db[this.modelo].destroy(
            {
                where: {
                    id: id
                }
            }
        )

        return result;
    }

}

module.exports = Service;